import React, { useState } from "react";
import "../index.css";

function Feedback() {
  const [timer, setTimer] = useState("0:00");
  const [error, setError] = useState("");

  return (
    <div className="center-align" id="contentDiv">
      <div className="card grey lighten-2 center-align" id="text">
        <div className="card-action" id="welcomeText">
          Leave Feedback or Report an Error! 😅
        </div>
        <div class="card-action" id="welcomeText">
          <input placeholder="Referral Code" id="searchInputs" type="text" class="white"/>
        </div>
        <div className="card-action" id="welcomeText">
        <textarea id="textarea1" class="materialize-textarea white" placeholder="Feedback/Bug Report"></textarea>
        <div class="red-text">{error}</div>
          <div><a class="waves-effect waves-light btn-large blue black-text">Send Feedback/Report Error</a></div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
