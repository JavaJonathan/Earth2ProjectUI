import React, { Fragment, useEffect, useState } from "react";
import "../index.css";
import { Redirect, Link } from "react-router-dom";

function Search() {
  const [searchObject, setSearchObject] = useState(
    {
      username: '',
      referralCode: '',
      secondReferralCode: '',
      usernameValidation: '',
      referralCodeValidation: '',
      secondReferralCodeValidation: '',
      passtext: '',
      validationPass: false,
      searchValidation: '',
      redirectUser: false
    })

    async function startSearching() {
      const response = await fetch(
        "https://localhost:44361/api/start", 
        {
          method: 'post',
          body: 
          JSON.stringify({
            'referralCode': `${searchObject.referralCode}`,
            'userName': `${searchObject.username}`
          }),
          headers: new Headers({'content-type': 'application/json'})    
        }
      );
      const data = await response.text();
      let searchProxy = searchObject
      switch(data)
      {
        case 'User is banned.': searchProxy = 
          {...searchProxy, 
            searchValidation: '❌ Sorry, you have been banned from using this site.',
            passtext: '',
            usernameValidation: '',
            referralCodeValidation: '',
            secondReferralCodeValidation: '',
            validationPass: false
          }; break;
        case 'Error. User is already searching.': searchProxy =
          {...searchProxy, 
            searchValidation: '❌ Sorry, it looks like you are already searching.',
            passtext: '',
            usernameValidation: '',
            referralCodeValidation: '',
            secondReferralCodeValidation: '',
            validationPass: false
          }; break;
        case 'User is successfully searching.': searchProxy =
          {...searchProxy, 
            searchValidation: '✔️ Success',
            passtext: '',
            usernameValidation: '',
            referralCodeValidation: '',
            secondReferralCodeValidation: '',
            validationPass: true,
            redirectUser: true
          }; break;
      }
      setSearchObject(searchProxy)
    }

  function validateForm()
  {
      let searchVar = {...searchObject,
        usernameValidation: '',
        referralCodeValidation: '',
        secondReferralCodeValidation: '',
        passtext: '',
        validationPass: true,
        searchValidation: ''
       }

    if(searchVar.username.length == 0)
    {
      searchVar =
        {
          ...searchVar,
          usernameValidation: '❌ Username must not be empty.',
          validationPass: false
        }
    }

    if(searchVar.referralCode.length == 0 || searchVar.secondReferralCode.length == 0)
    {
      searchVar =
        {
          ...searchVar,
          referralCodeValidation: '❌ Referral Codes must not be empty.',
          validationPass: false
        }
    }

    if(searchVar.referralCode != searchVar.secondReferralCode)
    {
      searchVar = 
        {
          ...searchVar,
          secondReferralCodeValidation: '❌ Referral Codes must match.',
          validationPass: false
        }
    }

    if(searchVar.validationPass)
    {
      searchVar = 
        {
          ...searchVar,
          passtext: '✔️ Sending data...'
        }
        startSearching()
    }

    setSearchObject(searchVar)
  }

  return (
    <div className="center-align" id="contentDiv">
      <div className="card grey lighten-2 center-align cardPadding" id="text">
        <div className="card-action" id="welcomeText">
          📝Pro-tips:
          <ul>
            <li id="helpText">
              - Report another user if your referral code is not used within 10
              minutes.
            </li>
            <li id="helpText">
              - Split up your purchase to minimize losses if a user needs to be
              reported. (This will also help re-selling your property on the
              Earth 2 Platform)
            </li>
          </ul>
        </div>
        <div className="card-action" id="welcomeText">
          Enter User Info Below:
        </div>
        <input
          placeholder="Username"
          id="searchInputs"
          type="text"
          class="white"
          onChange={event => setSearchObject({...searchObject, username: event.target.value})}
        ></input>
        <input
          placeholder="Referral Code"
          id="searchInputs"
          type="text"
          class="white"
          onChange={event => setSearchObject({...searchObject, referralCode: event.target.value})}
        ></input>
        <input
          placeholder="Confirm Activation Code"
          id="searchInputs"
          type="text"
          class="white"
          onChange={event => setSearchObject({...searchObject, secondReferralCode: event.target.value})}
        ></input>
        <div id="searchDiv">
          <div class="helper-text" id="validationText">
            {searchObject.usernameValidation}
          </div>
          <div class="helper-text" id="validationText">
            {searchObject.referralCodeValidation}
          </div>
          <div class="helper-text" id="validationText">
            {searchObject.secondReferralCodeValidation}
          </div>
          <div class="helper-text" id="validationText">
            {searchObject.passtext}
          </div>
          <div class="helper-text" id="validationText">
            {searchObject.searchValidation}
          </div>
        </div>
        <a
          className="waves-effect waves-light btn-large pulse blue"
          id="searchButton"
          onClick={validateForm}
        >
          Start Search 🔎
          { searchObject.redirectUser ?
            <Redirect push
            to={{
              pathname: "/lobby",
              state: { propUserName: searchObject.username, propReferralCode: searchObject.referralCode }
            }}
            /> : ''
          }      
        </a>
      </div>
    </div>
  );
}

export default Search;
