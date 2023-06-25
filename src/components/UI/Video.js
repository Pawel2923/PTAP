const Video = (props) => {
  return (
    <div className={props.video}>
      <h2>{props.header ? props.header : ""}</h2>
      <iframe
        className={props.className ? props.className : ""}
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
