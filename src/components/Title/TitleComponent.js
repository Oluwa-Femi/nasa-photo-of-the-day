import React, { useState } from "react";
import axios from "axios";
import Title from "./title";

function TitleComponent() {
  const [title, setTitle] = useState();

  let pageTitle;
  axios
    .get("https://lambda-github-api-server.herokuapp.com")
    .then(res => {
      pageTitle = res.data.title;
      console.log(pageTitle);
      setTitle(pageTitle);
    })
    .catch(error => {
      return "Beep!! Error";
    });
  return (
    <div>
      <Title title={title} />
    </div>
  );
}

export default TitleComponent;