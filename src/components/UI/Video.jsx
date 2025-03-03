import PropTypes from "prop-types";

const Video = (props) => {
  return (
    <div className={props.video}>
      <p>{props.header ? props.header : ""}</p>
      <iframe
        className={`${props.className ? props.className : ""}`}
        width={props.width ? props.width : "560"}
        height={props.height ? props.height : "315"}
        src={props.src ? props.src : ""}
        title={props.title ? props.title : "YouTube video player"}
        loading="lazy"
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
  allow: PropTypes.bool,
};

export default Video;
