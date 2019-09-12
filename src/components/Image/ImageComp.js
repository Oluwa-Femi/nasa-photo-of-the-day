import React from "react";

function ImageComp(props) {
  return ( 
    <div id="images">
      <img src={props.url} alt="this is a pic"></img>
    </div>
  );
}

export default ImageComp;