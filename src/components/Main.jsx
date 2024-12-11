import React from "react";
import "./Main.css";
import photoshop from "../assets/oldman.svg";

import newB from "../assets/1.svg";
import google from "../assets/2.svg";
import ibm from "../assets/3.svg";

import pentagram from "../assets/4.svg";
import ga from "../assets/5.svg";
import facebook from "../assets/6.svg";
import green from "../assets/green.svg";
import strelka from "../assets/righe.svg";
import Cosmos from "../assets/Cosmos.svg";
import man from "../assets/manphoto.svg";
import left from "../assets/left.svg";
import number from "../assets/Number.svg";
import right from "../assets/Right2.svg";
export default function Main() {
  return (
    <div>
      <section className="mainconteiner">
        <div className="onemainconteiner">
          <div>
            <h1 className="mainconteiner-text"> Make the Impossible</h1>
          </div>
          <div className="textconteiners">
            <div>
              <p className="mainconteiner-twotext">
                Create and edit content like never before.
              </p>
              <p className="mainconteiner-threetext">
                Your next generation creative toolkit — powered by machine
                learning.
              </p>
            </div>
            <div>
              <button className="mainconteiner-button">
                {" "}
                Try Runway for free
              </button>
            </div>
          </div>
        </div>
        <div className="photomainconteiner">
          <img src={photoshop} alt="photo" className="mainconteiner-photo" />
          <button className="mainconteiner-twobutton"> Sign up</button>
        </div>
      </section>

      <section className="secondconteiner">
        <div className="textsecondconteiner">
          <h1>USED BY CREATIVE TEAMS AT:</h1>
        </div>

        <div className="logossecondconteiner">
          <img src={newB} alt="newBphoto" />
          <img src={google} alt="google" />
          <img src={ibm} alt="ibm" />

          <img src={pentagram} alt="pentagram" />
          <img src={ga} alt="ga" />
          <img src={facebook} alt="facebook" />
        </div>
      </section>

      <section className="thirdconteinermain">
        <div className="thirdconteinertexts">
          <div className="thirdtext">
            <h1 className="videot">VIDEO TOOLS</h1>

            <h1 className="newstring">Introducing Green Screen</h1>
          </div>

          <div className="mainerconteiner">
            <div className="justoneclick">
              <div className="ptexts">
                <p className="grate">
                  A professional grade tool for cutting objects out of videos
                  with <span> just one click.</span> All from inside your
                  browser.
                </p>
                <p className="saytext">
                  Say goodbye to clumsy plug-ins and expensive software suites.
                </p>
              </div>
              <button className="trygreen">Try Green Screen</button>
            </div>

            <div className="photothird">
              <img
                className="ultracamera"
                src={green}
                alt="4kultasuperphotocamerayeee"
              />
            </div>
          </div>

          <div className="fouretextconteiner">
            <div className="onefouretextconteiner">
              <p>
                <img src={strelka} alt="photo" /> The first tool for
                professional rotoscoping on the web — and also the fastest.
              </p>
            </div>
            <div className="twofouretextconteiner">
              <p>
                <img src={strelka} alt="photo" />
                Forget downloading plugins for decades-old software.
              </p>
            </div>
            <div className="threefouretextconteiner">
              <p>
                <img src={strelka} alt="photo" />
                Export full resolution 4K videos for any project.
              </p>
            </div>
            <div className="fourefouretextconteiner">
              <p>
                <img src={strelka} alt="photo" />
                Skip the tutorial and get on with your work. It’s not that
                complicated.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="fifthconteiner">
        <div className="textfifthconteiner">
          <h1>Start creating</h1>
        </div>

        <div className="mainlogofifthconteiner">
          <div className="textsfifthconteiner">
            <h1 className="onetextsfifthconteiner">Generate</h1>
            <h1 className="twotextsfifthconteiner">Automate</h1>

            <h1 className="threetextsfifthconteiner">Transform</h1>
            <h1 className="fourtextsfifthconteiner">Analyze</h1>
            <h1 className="fifetextsfifthconteiner">Create</h1>
          </div>

          <div className="photofifthconteiner">
            <img src={Cosmos} alt="Cosmos" />
          </div>
        </div>
      </section>
    </div>
  );
}
