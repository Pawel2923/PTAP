import { useState, useEffect, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import CookieContext, {
  COOKIE_STORAGE_KEY,
  COOKIE_CONSENT_VERSION,
  COOKIE_CONSENT_MAX_AGE_MS,
  DEFAULT_COOKIE_CONSENT,
} from "./cookie-context";

const getSavedConsent = () => {
  if (typeof window === "undefined") {
    return null;
  }
  try {
    const raw = localStorage.getItem(COOKIE_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;

    // Verify version and expiry
    if (parsed.version !== COOKIE_CONSENT_VERSION) return null;
    if (
      !parsed.timestamp ||
      Date.now() - parsed.timestamp > COOKIE_CONSENT_MAX_AGE_MS
    ) {
      return null;
    }

    return {
      necessary: true,
      functional: Boolean(parsed.functional),
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
    };
  } catch (error) {
    console.warn("Unable to read cookie consent from localStorage:", error);
    return null;
  }
};

const storeConsent = (consentValues) => {
  if (typeof window === "undefined") {
    return;
  }
  try {
    const payload = {
      necessary: true,
      functional: Boolean(consentValues.functional),
      analytics: Boolean(consentValues.analytics),
      marketing: Boolean(consentValues.marketing),
      timestamp: Date.now(),
      version: COOKIE_CONSENT_VERSION,
    };
    localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(payload));
    window.dispatchEvent(
      new CustomEvent("ptap_cookie_consent_updated", { detail: payload })
    );
  } catch (error) {
    console.warn("Unable to save cookie consent to localStorage:", error);
  }
};

export const CookieProvider = ({ children }) => {
  const [consent, setConsent] = useState(DEFAULT_COOKIE_CONSENT);
  const [hasConsented, setHasConsented] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  useEffect(() => {
    const saved = getSavedConsent();
    if (saved) {
      setConsent(saved);
      setHasConsented(true);
      setIsBannerVisible(false);
    } else {
      setConsent(DEFAULT_COOKIE_CONSENT);
      setHasConsented(false);
      setIsBannerVisible(true);
    }
  }, []);

  const openPreferences = useCallback(() => {
    setIsPreferencesOpen(true);
  }, []);

  const closePreferences = useCallback(() => {
    setIsPreferencesOpen(false);
  }, []);

  const acceptAll = useCallback(() => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    storeConsent(allAccepted);
    setConsent(allAccepted);
    setHasConsented(true);
    setIsBannerVisible(false);
    setIsPreferencesOpen(false);
  }, []);

  const rejectOptional = useCallback(() => {
    const onlyNecessary = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    storeConsent(onlyNecessary);
    setConsent(onlyNecessary);
    setHasConsented(true);
    setIsBannerVisible(false);
    setIsPreferencesOpen(false);
  }, []);

  const savePreferences = useCallback((customChoices) => {
    const updated = {
      necessary: true,
      functional: Boolean(customChoices?.functional),
      analytics: Boolean(customChoices?.analytics),
      marketing: Boolean(customChoices?.marketing),
    };
    storeConsent(updated);
    setConsent(updated);
    setHasConsented(true);
    setIsBannerVisible(false);
    setIsPreferencesOpen(false);
  }, []);

  const withdrawConsent = useCallback(() => {
    try {
      localStorage.removeItem(COOKIE_STORAGE_KEY);
      window.dispatchEvent(
        new CustomEvent("ptap_cookie_consent_updated", {
          detail: DEFAULT_COOKIE_CONSENT,
        })
      );
    } catch (error) {
      console.warn("Unable to clear cookie consent:", error);
    }
    setConsent(DEFAULT_COOKIE_CONSENT);
    setHasConsented(false);
    setIsPreferencesOpen(false);
    setIsBannerVisible(true);
  }, []);

  const contextValue = useMemo(
    () => ({
      consent,
      hasConsented,
      isBannerVisible,
      isPreferencesOpen,
      openPreferences,
      closePreferences,
      acceptAll,
      rejectOptional,
      savePreferences,
      withdrawConsent,
    }),
    [
      consent,
      hasConsented,
      isBannerVisible,
      isPreferencesOpen,
      openPreferences,
      closePreferences,
      acceptAll,
      rejectOptional,
      savePreferences,
      withdrawConsent,
    ]
  );

  return (
    <CookieContext.Provider value={contextValue}>
      {children}
    </CookieContext.Provider>
  );
};

CookieProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CookieProvider;
