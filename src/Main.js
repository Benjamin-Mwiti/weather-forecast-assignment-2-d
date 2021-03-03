import React, { useState, useContext } from 'react';
import './Main.css';
import Cities, { CityIdContext } from './Cities';
import CurrentLocation from './CurrentLocation';
import FetchingData from "./FetchingData";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const CityNameContext = React.createContext();

function Main() {

    const [city_Name, setCity_Name] = useState("");
    console.log(city_Name);
    // const countryName = useContext(country_Name);

    const cityID = useContext(CityIdContext);

    return (
      <div className="app">
        <div className="app__bar">
          <div className="app__title">
            <span><strong>Home</strong></span>
            <span><strong>Visited Cities</strong></span>
          </div>
          <div className="search__container">
            <form>
              <input type="search" name="city_name" value={city_Name} placeholder="Name of your city" onChange={e => setCity_Name(e.target.value)}
                onSubmit={e => {
                  if(city_Name !== "") {
                    setCity_Name("");
                    e.preventDefault();
                  } else {
                    alert("The field should not be empty");
                  }
                }} />
              <Router>
                {/* <Link to={`/${cityID}`} > */}
                  <button component={ Link } to={`/${cityID}`} id="button" type="submit" onClick={e => {}} >Search</button>
                {/* </Link> */}
              </Router>
            </form>
          </div>
        </div>
        <div className="app__body">
          <div className="city__forecast">
            <Router>
              <Switch>
                <Route path="/" exact component={ CurrentLocation } />
                <CityNameContext.Provider value={ city_Name }>
                  <Route path={`/${cityID}`} component={ Cities } />
                </CityNameContext.Provider>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    )
}

export default Main;
