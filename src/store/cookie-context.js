import { createContext } from "react";

export const COOKIE_STORAGE_KEY = "ptap_cookie_consent";
export const COOKIE_CONSENT_VERSION = "1.0";
export const COOKIE_CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000; // 365 days

export const DEFAULT_COOKIE_CONSENT = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
};

const CookieContext = createContext({
  consent: DEFAULT_COOKIE_CONSENT,
  hasConsented: false,
  isBannerVisible: false,
  isPreferencesOpen: false,
  openPreferences: () => {},
  closePreferences: () => {},
  acceptAll: () => {},
  rejectOptional: () => {},
  savePreferences: () => {},
  withdrawConsent: () => {},
});

export default CookieContext;
