import React, { useState, useContext } from 'react';
import './Main.css';
import Cities, { CityIdContext } from './Cities';
import CurrentLocation from './CurrentLocation';
import FetchingData from "./FetchingData";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const CityNameContext = React.createContext();

function Main() {

    const [city_Name, setCity_Name] = useState("");
    console.log(city_Name)
    // const countryName = useContext(country_Name);

    const cityID = useContext(CityIdContext);

    const Cities = () => {
      return () => {
        <CityNameContext.Provider value={city_Name}>
          <Cities />
        </CityNameContext.Provider>
      }
    }
    Cities();

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
              <Router>
                <Link to="cities" >
                  <button to="cities" id="button" type="submit" onClick={ e => {
                    if(city_Name == "") {
                      alert("The field should not be empty");
                    }
                    setCity_Name("");
                    e.preventDefault();
                  }} >Search</button>
                </Link>
              </Router>
            </form>
          </div>
        </div>
        <div className="app__body">
          <div className="city__forecast">
            <Router>
              <Switch>
                <Route path="/" exact component={ CurrentLocation } />
                {/* <CityNameContext.Provider value={city_Name}>
                  <Route path="cities" component={Cities} />
                </CityNameContext.Provider> */}
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    )
}

export default Main;
