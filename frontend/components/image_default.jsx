import React from "react";

const ImageDefault = props => (
  <img
    className={props.className}
    src={
      props.src ||
      "https://s3-us-west-1.amazonaws.com/soundmacleod-prod/uploads/fallbacks/avatar.jpg"
    }
  />
);

export default ImageDefault;
