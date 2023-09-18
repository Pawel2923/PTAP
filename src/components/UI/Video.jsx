import { useCallback } from "react";
import lazyframe from "lazyframe";
import PropTypes from "prop-types";

const Video = (props) => {
  const onTouchStart = useCallback(() => {}, []);
  document.addEventListener("touchstart", onTouchStart, { passive: true });
  lazyframe(".lazyframe");

  return (
    <div className={props.video}>
      <p>{props.header ? props.header : ""}</p>
      <iframe
        className={`${props.className ? props.className : ""} lazyframe`}
        width={props.width ? props.width : "560"}
        height={props.height ? props.height : "315"}
        src={props.src ? props.src : ""}
        title={props.title ? props.title : "YouTube video player"}
        allow={
          props.allow
            ? props.allow
            : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        }
        allowFullScreen
      ></iframe>
    </div>
  );
};

Video.propTypes = {
  video: PropTypes.string.isRequired,
  header: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
  allow: PropTypes.bool
};

export default Video;
