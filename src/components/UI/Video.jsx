import { useId } from "react";
import PropTypes from "prop-types";

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

  return (
    <div className={video}>
      {header && <p id={headerId}>{header}</p>}
      <iframe
        className={className ? className : ""}
        width={width}
        height={height}
        src={src}
        title={iframeTitle}
        aria-labelledby={header && !title ? headerId : undefined}
        loading="lazy"
        allow={allow}
        allowFullScreen
        {...rest}
      ></iframe>
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
