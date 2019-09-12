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

  const WholeApp = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
`
const StyledTitle = styled.div`
  width: 100%;
  background: peru;
  min-height: 80px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  h1 {
    color: #f2f2f2;
  }
  p {
    margin-right: 20px;
  }
`
const StyledImage = styled.div`
  width: 80%;
  margin: auto;
  height: 400px;
  background: peru;
  img {
    width: 100%;
    height: 100%;
  }
`

const StyledDescription = styled.div`
  width: 80%;
  margin: auto;
  height: auto;
  padding: 10px 30px;
  h2 {
    text-align: center;
    color: #636363;
  }
  p {
    text-align: center;
    font-size: 20px;
    line-height: 1.5;
    color: #333
  }
`
const StyledFooter = styled.header`
  width: 100%;
  background: peru;
  min-height: 60px; 
  margin: 0;
  padding: 10px 30px;
`




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