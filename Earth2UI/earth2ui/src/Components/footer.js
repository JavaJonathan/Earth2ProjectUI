import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="page-footer grey lighten-5 center" id="footer">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5>Contact Me 💬</h5>
            <div>
              <a class="blue-text" href="https://www.facebook.com/jonhenderson20" target="_blank">
                Facebook
              </a>
            </div>
            <div>
              <a class="blue-text" href="https://www.linkedin.com/in/javajonathan/" target="_blank">
                LinkedIn
              </a>
            </div>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5>How is the Application? 😃</h5>
            <ul>
              <li>
              <Link to="/feedback">
                <a class="red-text">
                  Report Error/Feedback
                </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright" id="text">
        <div className="container">Created by Jonathan Henderson</div>
      </div>
    </footer>
  );
}

export default Footer;
