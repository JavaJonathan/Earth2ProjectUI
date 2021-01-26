import React, { useState } from "react";
import "../index.css";

function About() {
  const [timer, setTimer] = useState("0:00");

  return (
    <div className="center-align" id="contentDiv">
      <div className="card grey lighten-2 center-align black-text" id="welcomeText">
      <div class="card-action">About SpreadTheE2Wealth.io</div>
      <div class="card-action">
        This application was built by a single fan/developer to assist the Earth 2 platform. This application is in no way affiliated with the Earth 2 Platform - Icreated this on my own.
        This application was created in order to help the Earth 2 Users / Earth 2 Platform make more money. This application makes it easy for users to match up with other users buying land
        so both users can make money from using the other users referral code and having the other user use their referral code.
      </div>
      <div>💰💰💰</div>
      </div>
    </div>
  );
}

export default About;
