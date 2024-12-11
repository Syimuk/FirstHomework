import React from "react";
import "./Footer.css";
import get from "../assets/poliv.svg";
import runway from "../assets/run.svg";
export default function Footer() {
  return (
    <div>
      <section className="footercontainer">
        <div className="footermaincontainer">
          <img src={get} alt="getphoto" />
          <h1 className="firsttextfooter">Get Started</h1>
        </div>

        <div className="textfootercontainer">
          <h1 className="secondtextfooter">Now</h1>
        </div>
      </section>

      <section className="secondfootercontainer">
        <div className="secondlogofooterconteiner">
          <div>
            <img src={runway} alt="" />
          </div>
          <div className="secondlogotextfooter">
            <h1>Features</h1>

            <div className="secondlogotextsfooter">
              <h1>Green Screen</h1>
              <h1>Generative Media</h1>
              <h1>Face Animation (Soon)</h1>

              <h1>Model Playground</h1>
              <h1>Training</h1>
              <h1>Hosted Models</h1>
            </div>
          </div>

          <div className="secondlogotextfooter">
            <h1>Resources</h1>

            <div className="secondlogotextsfooter">
              <h1>Educators</h1>
              <h1>Blog</h1>
              <h1>Learn & Docs</h1>

              <h1>Support</h1>
              <h1>Python SDK</h1>
              <h1>Made With</h1>
              <h1>Sign up</h1>
              <h1>Log in</h1>
            </div>
          </div>

          <div className="secondlogotextfooter">
            <h1>Runway</h1>

            <div className="secondlogotextsfooter">
              <h1>About</h1>
              <h1>Careers</h1>
              <h1>System Status</h1>

              <h1>Release Notes</h1>
              <h1>Join our Slack</h1>
              <h1>YouTube</h1>
              <h1>Twitter</h1>
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>

        <div className="endfootertext">
          <a href="#"> 2021 Runway AI, Inc.</a>
          <a href="#"> Code of Conduct</a>
          <a href="#">Privacy Policy</a>

          <a href="#"> CCPA</a>
          <a href="#"> Terms and Conditions</a>
        </div>
      </section>
    </div>
  );
}
