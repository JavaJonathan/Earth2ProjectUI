import React, { Fragment, useEffect, useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Home() {
  const [numberOfUsersSearcing, setNumberOfUsersSearcing] = useState("");

  useEffect(() => {
    getNumberOfUsers();
  }, []);

  async function getNumberOfUsers() {
    const response = await fetch(
      "https://localhost:44361/api/getnumberofusers"
    );
    const data = await response.text();
    setNumberOfUsersSearcing(data);
  }

  return (
    <div className="center-align" id="contentDiv">
      <div className="card grey lighten-2 center-align" id="text">
        <div className="card-action" id="welcomeText">
          Welcome to SpreadTheE2Wealth.io! The best way to earn money when
          buying land on the Earth 2 Platform!
        </div>
        <div className="h1" id="usersSearching">
          Number of users searching
        </div>
        <div id="number">{numberOfUsersSearcing == ""? "Loading...": numberOfUsersSearcing}</div>
        <div id="usersSearching">Number of users matched</div>
        <div id="number">20</div>
        <div className="center-align" id="bottomDiv">
          <Link to="/search"><a
            className="waves-effect waves-light btn-large pulse blue"
            id="searchButton"
          >
            Start Searching 🔎
          </a>
          </Link>
        </div>
        <div class="card-action">
        <Link className="blue-text" to="/about" id="aboutText">
            READ ABOUT THE SITE HERE 📚
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
