import React from 'react';
import './Home.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {

  const [openPopup, setOpenPopup] = useState(false);
  return (
    <div>
      <p>for when you feel stuck</p>
      <p> write the first sentence of your intro.</p>
      <div className="parent">
        <button onClick={() => setOpenPopup(true)}>
          <Link to="/" className="manage-button">manage</Link> </button>{
          openPopup &&
          <div className = "wrapper">
            <div className = "popUp">
              <h2>PopUp</h2>
              <button className = "closeButton" onClick={() => setOpenPopup(false)}>X</button>
            </div>
          </div>
        }
      </div>
    </div>
    
  )
}

export default Home;