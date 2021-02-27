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
    
    const openWeatherMapURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=1cc7ad57a30f3ba7be0d6a9766a69562`;
    const openWeatherMapFlag = `http://openweathermap.org/images/flags/${country_Name.toLowerCase()}.png`;
    // console.log(openWeatherMapURL);

    useEffect(() => {
        async function getOpenWeatherMapData() {
            const fetchedData = await fetch(openWeatherMapURL);
            const Data = await fetchedData.json();
            return Data;
        }
        getOpenWeatherMapData()
            .then(response => {
                setWeather_Stats(response);
            })
            .catch((error) => {
                console.log(error)
            });
    }, [cityName]);

    return (
        <WeatherStatsContext.Provider value={ weather_Stats }>
            <CityCountContext.Provider value={ city_Count }>
                <IdenticalCitiesContext.Provider value={ totalIdenticalCities }>
                    <Cities />
                    {/* <Pagination /> */}
                </IdenticalCitiesContext.Provider>
            </CityCountContext.Provider>
        </WeatherStatsContext.Provider>
    )

}

export default FetchingData;
