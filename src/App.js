import React, { useState } from "react";
import axios from "axios";
import TitleComponent from "./components/Title/title";
import DateComp from "./components/Date/DateComp";
import InfoComp from "./components/Info/info";
import ImageComp from "./components/Image/ImageComp";
import styled from 'styled-components';

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
        return "Errrrr bleh!!";
      });
  };

const NasaApp = styled.div`
  margin: 0;
  max-width: 80vw;
  padding-left: 10vw;
`
const StyledMain = styled.div`
  width: 100%;
  background: white;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 10px;
  h1 {
    color: black;
  }
  p {
    margin-right: 20px;
    color: black;
  }
`
const StyledTop = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
background: maroon;
border-radius: 2px solid black;
`
const StyledHorizontal = styled.div`
  display: flex;
flex-direction: row;
`
const StyledImage = styled.div`
  width: 80%;
  margin: auto;
  height: 400px;
  padding: 5px 10px;
  img {
    width: 90%;
    height: 60vh;   
    border: 2px solid blue;
  }
`

const StyledInfo = styled.div`
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
    font-size: 1rem;
    line-height: 1.2;
    color: blue;
  }
`




  React.useEffect(myData, []);
  const { title, url, explanation, date } = state;

  return (
    <NasaApp>
      <StyledMain>
        <StyledTop>
          <TitleComponent title={title} />
          <DateComp date={date} />
        </StyledTop>
        <StyledHorizontal>
        <StyledInfo>
          <InfoComp info={explanation} />
        </StyledInfo>
        <StyledImage>
          <ImageComp url={url} />
        </StyledImage>
        </StyledHorizontal>
      </StyledMain>
      </NasaApp>
  );
}

export default App;