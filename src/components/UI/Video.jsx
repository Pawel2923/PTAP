import { useId, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import useCookieConsent from "../../hooks/use-cookie-consent";
import styles from "./Video.module.css";

const getPrivacyEnhancedUrl = (url, autoplay = false) => {
  if (!url) return "";
  let safeUrl = url
    .replace(
      "https://www.youtube.com/embed",
      "https://www.youtube-nocookie.com/embed"
    )
    .replace(
      "https://youtube.com/embed",
      "https://www.youtube-nocookie.com/embed"
    );

  if (autoplay) {
    const separator = safeUrl.includes("?") ? "&" : "?";
    if (!safeUrl.includes("autoplay=1")) {
      safeUrl = `${safeUrl}${separator}autoplay=1`;
    }
  }
  return safeUrl;
};

const Video = ({
  video,
  header,
  className,
  width = "560",
  height = "315",
  src = "",
  title,
  allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
  ...rest
}) => {
  const headerId = useId();
  const iframeTitle = title || header || "Odtwarzacz wideo";

  const { consent, savePreferences, openPreferences } = useCookieConsent();
  const [isLocallyUnlocked, setIsLocallyUnlocked] = useState(false);

  // Marketing cookies allow external tracking media embeds
  const isConsentGiven = Boolean(consent?.marketing);
  const shouldRenderIframe = isConsentGiven || isLocallyUnlocked;

  const handleUnlockOnce = () => {
    setIsLocallyUnlocked(true);
  };

  const handleAcceptAlways = () => {
    savePreferences({
      ...consent,
      marketing: true,
    });
  };

  const iframeSrc = getPrivacyEnhancedUrl(src, isLocallyUnlocked);

  return (
    <div className={video}>
      {header && <p id={headerId}>{header}</p>}
      {shouldRenderIframe ? (
        <iframe
          className={className ? className : ""}
          width={width}
          height={height}
          src={iframeSrc}
          title={iframeTitle}
          aria-labelledby={header && !title ? headerId : undefined}
          loading="lazy"
          allow={allow}
          allowFullScreen
          {...rest}
        ></iframe>
      ) : (
        <div
          className={styles.placeholder}
          role="region"
          aria-label={`Zablokowana treść wideo: ${iframeTitle}`}
        >
          <div className={styles.placeholderContent}>
            <div className={styles.iconCircle} aria-hidden="true">
              <FontAwesomeIcon icon={faPlay} className={styles.playIcon} />
            </div>
            {(!header || (title && title !== header)) && (
              <p className={styles.placeholderTitle}>
                <strong>{iframeTitle}</strong>
              </p>
            )}
            <p className={styles.placeholderNotice}>
              Ten film pochodzi z serwisu YouTube. Załadowanie odtwarzacza
              połączy z serwerami Google i może zapisać pliki cookies.
            </p>
            <div className={styles.buttonGroup}>
              <button
                type="button"
                className={`${styles.button} ${styles.buttonPrimary}`}
                onClick={handleUnlockOnce}
              >
                Załaduj wideo
              </button>
              <button
                type="button"
                className={`${styles.button} ${styles.buttonSecondary}`}
                onClick={handleAcceptAlways}
              >
                Zezwalaj zawsze
              </button>
            </div>
            <button
              type="button"
              className={styles.settingsLink}
              onClick={openPreferences}
            >
              Ustawienia cookies
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

Video.propTypes = {
  video: PropTypes.string.isRequired,
  header: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  src: PropTypes.string,
  title: PropTypes.string,
  allow: PropTypes.string,
};

export default Video;
