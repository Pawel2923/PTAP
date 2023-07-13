import { useCallback } from "react";
import lazyframe from "lazyframe";

const Video = (props) => {
  const onTouchStart = useCallback(() => {}, []);
  document.addEventListener("touchstart", onTouchStart, { passive: true });
  lazyframe(".lazyframe");

  return (
    <div className={props.video}>
      <p>{props.header ? props.header : ""}</p>
      <iframe
        className={`${props.className ? props.className : ""} lazyframe`}
        data-vendor="youtube"
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

export default Video;
