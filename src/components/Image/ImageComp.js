import React from "react";

function ImageComp(props) {
  return (
    <div>
      <img src={props.url} alt="this is a pic"></img>
    </div>
  );
}

export default ImageComp;