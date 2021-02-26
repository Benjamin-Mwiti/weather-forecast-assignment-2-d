import React, { useState, useEffect } from 'react';
import './Main.css';
import Cities from './Cities';

export const CityContext = React.createContext();

function Main() {

    const [city_Name, setCity_Name] = useState("");
    console.log(city_Name)
    // const countryName = useContext(country_Name);

    return (
      <div className="app">
        <div className="app__bar">
          <div className="app__title">
            <span><strong>Home</strong></span>
            <span><strong>Visited Cities</strong></span>
          </div>
          <div className="search__container">
            <form>
              <input type="search" name="city name" value={city_Name} placeholder="Name of your city" 
                onChange = {e => {
                  setCity_Name(e.target.value);
                }} />
              <button type="submit" onClick={(e) => {
                if(city_Name == "") {
                  alert("The field should not be empty");
                }
                e.preventDefault();
              }} >Search</button>
            </form>
          </div>
        </div>
        <div className="app__body">
          <div className="city__forecast">
            <CityContext.Provider value={city_Name}>
              <Cities />
            </CityContext.Provider>
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
