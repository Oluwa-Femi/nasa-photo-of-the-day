import React, { useState } from "react";
import axios from "axios";
import TitleComponent from "./components/Title/title";
import DateComp from "./components/Date/DateComp";
import InfoComp from "./components/Info/info";
import ImageComp from "./components/Image/ImageComp";
import Footer from "./components/Footer/footer";
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
  min-height: 80px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 10px;
  h1 {
    color: black;
  }
  p {
    /* margin-right: 20px; */
    color: black;
    font-weight: bold;
  }
`
const StyledTop = styled.div`
display: flex;
justify-content: space-evenly;
background: maroon;
border-radius: 10px;
`
const StyledHorizontal = styled.div`
  display: flex;
/* flex-direction: row; */
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
    border-radius: 10px;
  }
`

const StyledInfo = styled.div`
  width: 80%;
  margin: auto;
  height: auto;
  padding: 5px 20px;
  h2 {
    text-align: center;
    color: #636363;
  }
  p {
    text-align: center;
    font-size: 1rem;
    line-height: 1.7;
    color: blue;
  }
`
const StyledFooter = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
background: maroon;
border-radius: 10px;
`



  React.useEffect(myData, []);
  const { title, url, explanation, date, footer } = state;

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
        <StyledFooter>
          <Footer  />
        </StyledFooter>
      </StyledMain>
      </NasaApp>
  );
}

export default App;