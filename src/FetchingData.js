import React, { useState, useEffect, useContext } from 'react';
import Cities from './Cities';
// import Pagination from './Pagination';
import { CityNameContext } from './Main';
import $ from 'jquery';

export const WeatherStatsContext = React.createContext();
export const CityCountContext = React.createContext();
export const IdenticalCitiesContext = React.createContext();

function FetchingData() {
    
    const [weather_Stats, setWeather_Stats] = useState({});
    const [totalIdenticalCities, setTotalIdenticalCities] = useState([]);
    const [country_Name, setCountry_Name] = useState("");
    const [city_Count, setCity_Count] = useState(0);
    console.log(weather_Stats);
    // console.log(totalIdenticalCities);

    let cityName = useContext(CityNameContext);
    let nameOfCity = "Paris";
    
    return (
        <div className="cities">
            <div className="city__weatherInfo">
                {/* <WeatherStatsContext.Provider value={ weather_Stats }>
                    <CityCountContext.Provider value={ city_Count }>
                        <IdenticalCitiesContext.Provider value={ totalIdenticalCities }>
                            <Cities />
                            <Pagination />
                        </IdenticalCitiesContext.Provider>
                    </CityCountContext.Provider>
                </WeatherStatsContext.Provider> */}
            </div>
        </div>
    )

}

export default FetchingData;
