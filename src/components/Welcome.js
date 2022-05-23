import React, { useState } from "react";
import "./Welcome.css";
import { FaArrowDown } from "react-icons/fa";
import NavRetailModal from "./NavRetailModal.js";
import NavServiceModal from "./NavServiceModal";

function Welcome() {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [retailOpen, setRetailOpen] = useState(false);

  const retailModal = () => {
    if (retailOpen) {
      setRetailOpen(false);
    } else {
      setRetailOpen(true);
      setServiceOpen(false);
    }

    console.log(retailOpen);
  };
  const serviceModal = () => {
    if (serviceOpen) {
      setServiceOpen(false);
    } else {
      setServiceOpen(true);
      setRetailOpen(false);
    }

    console.log(serviceOpen);
  };

  return (
    <div className="welcome-container">
      <div className="nav-container">
        <h2 className="headerTwo">Christian Help</h2>
        <nav>
          <ul className="list">
            <li>
              <a href="/about" className="list-anchor">
                About
              </a>
            </li>
            <li>
              <button
                href="/retailer"
                className="list-anchor"
                onClick={retailModal}
              >
                Retailers
              </button>
            </li>
            <li>
              <button
                href="/services"
                className="list-anchor"
                onClick={serviceModal}
              >
                Services
              </button>
            </li>
            <li>
              <a href="/addBrand" className="list-anchor call">
                Add Your Brand
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>{retailOpen ? <NavRetailModal /> : <div></div>}</div>
      <div>{serviceOpen ? <NavServiceModal /> : <div></div>}</div>
      <div className="hero-container">
        <div className="about">
          <h1 className="headerOne">Finding good help, made easy.</h1>
          <form className="search-container">
            <input
              type="text"
              className="search"
              placeholder="What are you looking for?"
            ></input>
            <input className="zip" type="number" placeholder="Zip code"></input>
            <button className="search-btn">Search</button>
          </form>
        </div>
        <div className="hero">
          <img
            className="hero-img"
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGx1bWJpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="blah blah"
          />
        </div>
      </div>

      <div>
        <a href="/" className="arrow-container">
          <FaArrowDown className="arrow" />
        </a>
      </div>
    </div>
  );
}

export default Welcome;
