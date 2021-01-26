import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "../index.css";

function Lobby(props) {
  const [timer, setTimer] = useState("0:00");
  const [userObject, setUserObject] = useState(
    {
      username: props.location.state.propUserName,
      referralCode: props.location.state.propReferralCode,
      userMatch: []
    })
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  function updateTimer() {
    if(seconds.toString().length == 2 ){
    setTimer(`${minutes}:${seconds}`);
    }
    else
    {
        setTimer(`${minutes}:0${seconds}`)
    }
  if (seconds == 59) {
    setMinutes(minutes => minutes + 1);
    setSeconds(0);
  } else {
    setSeconds(seconds => seconds + 1);
  }

}

async function checkForAnotherUser()
{
  const response = await fetch(
    "https://localhost:44361/api/findmatch", 
    {
      method: 'post',
      body: JSON.stringify({'referralCode': `${userObject.referralCode}`}),
      headers: new Headers({'content-type': 'application/json'})
    }
  );
  const data = await response.json();
  setUserObject({...userObject, userMatch: data})
}

useEffect(() => {
const timer=setTimeout(() => {
updateTimer()
//we want to hit the api every 5 seconds
if(seconds == 0 || seconds % 5 == 0)
{
  checkForAnotherUser()
}
}, 1000);

return () => clearTimeout(timer);
});

  return (
    <div className="center-align" id="contentDiv">
      <div className="card grey lighten-2 center-align" id="text">
        <div className="card-action" id="welcomeText">
          Finding another user buying land.. 🔎
          <div id="helpText">
            Please allow up to 5-10 minutes to find another user buying land.
          </div>
        </div>
        <div className="card-action" id="timer">
          {timer}
          { userObject.userMatch.length == 2 ?
            <Redirect push
            to={{
              pathname: "/match",
              state: { propReferralCode: userObject.userMatch[0], propUserName: userObject.userMatch[1] }
            }}
            /> : ''
          }
        </div>
        <div class="card-action" id="welcomeText">
          <div>Your Username:</div>
          <div>{userObject.username}</div>
          <div>Your Referral Code:</div>
          <div>{userObject.referralCode}</div>
        </div>
        <div class="card-action" id="welcomeText">
          Note: If no user is found - please consider using my referral code
          OHT7OMD7MI for server costs. 🙏
        </div>
      </div>
    </div>
  );
}

export default Lobby;
