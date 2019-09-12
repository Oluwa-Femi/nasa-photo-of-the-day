import React, { useState } from "react";
import axios from "axios";
import TitleComponent from "./components/Title/title";
import DateComp from "./components/Date/DateComp";
import InfoComp from "./components/Info/info";
import ImageComp from "./components/Image/ImageComp";

import "./App.css";


function App() {
  const [state, setState] = useState({});

  const myData = () => {
    axios
      .get("https://lambda-github-api-server.herokuapp.com")
      .then(res => {
        console.log(res.data);
        setState(res.data);
      })
      .catch(error => {
        return "Something went wrong";
      });
  };

  React.useEffect(myData, []);
  const { title, url, explanation, date } = state;

  return (
    <div className="App">
      <TitleComponent title={title} />
      <DateComp date={date} />
      <InfoComp info={explanation} />
      <ImageComp url={url} />
    </div>
  );
}

export default App;