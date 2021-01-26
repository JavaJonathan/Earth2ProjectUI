import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav id="navBar">
      <div className="nav-wrapper grey lighten-5">
       <Link to="/"> <a className="brand-logo center hoverable" id="text">
          SpreadTheE2Wealth 🤑
        </a>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
