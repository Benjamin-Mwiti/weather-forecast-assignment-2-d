import React from 'react';
import './Main.css'

function Main() {
    return (
        <div className="app">
      <div className="app__bar">
        <div className="app__title">
          <span><strong>Home</strong></span>
          <span><strong>Visited Cities</strong></span>
        </div>
        <div className="search__container">
          <form>
            <input type="search" name="city name" /* value={city_name} */ placeholder="Name of your city" 
              /* onChange = {e => {
                setCity_Name(e.target.value);
              }} */ />
            <button type="submit" /* onClick={(e) => {
              if(city_name == "") {
                alert("The field should not be empty");
              }
              e.preventDefault();
            }} */ >Search</button>
          </form>
        </div>
      </div>
      <div className="app__body">
        <div className="city__forecast">
          <span></span>
          <div className="city__stats">
              <p>Toronto, ON</p>
              <p>Friday 12 February 2021</p>
              <p>-15<sup>o</sup>C</p>
              <p>Cloudy</p>
              <p>-13<sup>o</sup>C / -16<sup>o</sup>C</p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Main;
