import React from 'react';
import './Home.css';
import Assignment from'./Assignment';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoReload } from "react-icons/io5";
import { IoIosCheckmark } from "react-icons/io";

function Home() {

  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div>
      
      <div className = "parent">
        <p>for when you feel stuck</p>
        <p> write the first sentence of your intro.</p>
        <button><IoIosCheckmark /> did it</button>
        <button> <IoReload /> another </button>
      </div>


      <div className="parent">
        <button className="manage-button" onClick={() => setOpenPopup(true)}>
          manage</button> {
          openPopup &&
          <div className = "wrapper">
            <div className = "popUp">
              <button className = "closeButton" onClick={() => setOpenPopup(false)}>X</button>
              <Assignment />
            </div>
          </div>
        }
      </div>
    </div>
    
  )
}

export default Home;