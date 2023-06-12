import React from "react";

const Video = (props) => {
  return (
    <React.Fragment>
      <h2>{props.header ? props.header : ""}</h2>
      <iframe
        className={props.classes ? props.classes : ""}
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
    </React.Fragment>
  );
};

export default Video;
