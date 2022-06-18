import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="details-container">
        <h3 className="headerThree">Great help, anywhere</h3>
        <p className="words">
          Find christians in your area who are specialized in their line of
          work. Our network is continually growing.
        </p>
      </div>
      <img
        className="about-img"
        src="https://images.unsplash.com/photo-1547609434-b732edfee020?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29vZCUyMHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500"
        alt="man working on wood"
      />
      <img
        src="https://images.unsplash.com/photo-1562322140-8baeececf3df?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1c2luZXNzJTIwb3duZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500"
        className="about-img"
        alt="owner of a salon"
      />
      <div className="details-container">
        <h3 className="headerThree">Add your retail business</h3>
        <p className="words">
          If you are a believer and own your own retail business, click below
          and add your business.
        </p>
        <a href="/addBrand" className="list-anchor call">
          Add Your Brand
        </a>
      </div>
      <div className="details-container">
        <h3 className="headerThree">Add a service</h3>
        <p className="words">
          If you are a believer and excel in a certain trade, add your business.
        </p>
        <a href="/addBrand" className="list-anchor call">
          Add Your Brand
        </a>
      </div>
      <img
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGx1bWJpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500"
        className="about-img"
        alt="Plumber working on fixing a pipe"
      />
    </div>
  );
}

export default About;
