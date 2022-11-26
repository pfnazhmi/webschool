import React from "react";
import Hero from "./Hero";
import Major from "./Major";
import Activity from "./Activity";

import maj1 from "./../assets/pic6.jpg";
import maj2 from "./../assets/pic7.jpg";
import maj3 from "./../assets/pic8.jpg";

import act1 from "./../assets/pic4.jpg";
import act2 from "./../assets/pic8.jpg";
import act3 from "./../assets/pic1.jpeg";
import act4 from "./../assets/pic7.jpg";

const MainContent = () => {
  return (
    <div>
      <Hero />

      <div className="container">
        <div className="row">
          <div className="col-12 text-center my-5">
            <h1>Major at Pal University</h1>
          </div>
          <div className="row justify-content">
            <div className="col-lg-4 col-12">
              <Major image={maj1} majorCampus="Doctor" />
            </div>
            <div className="col-lg-4 col-12">
              <Major image={maj2} majorCampus="Economy Business" />
            </div>
            <div className="col-lg-4 col-12">
              <Major image={maj3} majorCampus="Architecture" />
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-center my-5">
              <h1>Activity</h1>
            </div>
            <div className="col-12 my-3">
              <Activity
                image={act1}
                title="Programming"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
            <div className="col-12 my-3">
              <Activity
                image={act2}
                title="Designing Buildings"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
            <div className="col-12 my-3">
              <Activity
                image={act3}
                title="Analysis Business Meeting"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
            <div className="col-12 my-3">
              <Activity
                image={act4}
                title="Seminar"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
