import React, { useState } from "react";
import axios from "axios";
import DateComp from "./DateComp";

function Date() {
  let pageDate;
  const [date, setDate] = useState();
  axios
    .get("https://lambda-github-api-server.herokuapp.com")
    .then(res => {
      console.log(res.data);
      pageDate = res.data.date;
      setDate(pageDate);
    })
    .catch(error => {
      return "Something went wrong";
    });
  return (
    <div>
      <DateComp date={date} />
    </div>
  );
}

export default Date;