import React, { useState, useEffect } from "react";
import "../index.css";

function Match(props) {
  const [timer, setTimer] = useState("0:00");
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(10);
  const [disableString, setDisableString] = useState("waves-effect waves-light btn-large red black-text disabled");
  const [userObject, setUserObject] = useState({userName: props.location.state.propUserName, referralCode: props.location.state.propReferralCode});

    function updateTimer() {
        if(seconds.toString().length == 2 ){
        setTimer(`${minutes}:${seconds}`);
        }
        else
        {
            setTimer(`${minutes}:0${seconds}`)
        }
        if (minutes == 0 && seconds == 0) {
            setDisableString("waves-effect waves-light btn-large red black-text")
        }
    else {
      if (seconds == 0) {
        setMinutes(minutes => minutes - 1);
        setSeconds(59);
      } else {
        setSeconds(seconds => seconds - 1);
      }
    }

  }

  useEffect(() => {
  const timer=setTimeout(() => {
    updateTimer()
  }, 1000);

  return () => clearTimeout(timer);
});

  return (
    <div className="center-align" id="contentDiv">
      <div className="card grey lighten-2 center-align" id="text">
        <div className="card-action" id="welcomeText">
          Match Found! 🎉
          <div id="helpText">
            Please user the user's referral code below when buying land.
          </div>
        </div>
        <div class="card-action" id="welcomeText">
          Username:
          <div>{userObject.userName}</div>
        </div>
        <div class="card-action" id="welcomeText">
          Referral Code:
          <div>{userObject.referralCode}</div>
        </div>
        <div className="card-action" id="welcomeText">
        <div>If this user does not buy land with you referral code within 10 minutes - please report this user.</div>
        <div>Note: Please make sure you are 100% certain this user has not user your code before reporting - the reported user will likely be banned.</div>
          <div id="timer">{timer}</div>
          <div><a className={disableString}>Report User</a></div>
        </div>
      </div>
    </div>
  );
}

export default Match;
