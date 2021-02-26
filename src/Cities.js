import React, { useState, useContext } from 'react';
import './Cities.css';
import { CityNameContext } from './Main';
import { WeatherStatsContext, TotalCitiesContext } from './FetchingData';
import Pagination from './Pagination';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cities() {

    const [search_ID, setSearch_ID] = useState();
    const [recently_Viewed, setRecently_Viewed] = useState();

    const cityName = useContext(CityNameContext);
    const weatherStats = useContext(WeatherStatsContext);
    const totalCities = useContext(TotalCitiesContext);
    console.log(totalCities);

    let isOnline = window.navigator.onLine;

    const DOM_Manipulation = () => {
        if(isOnline) {
            for (let i = 0; i < cityName.length; i++) {
                if (cityName[i] == weatherStats.name[i]) {
                    console.log(weatherStats.name[i]);
                    // $(('.city__weatherInfo p').eq(0)).before(openWeatherMapFlag);
                    $('.city__weatherInfo').html(`<p>${weatherStats.name[i]}, ${weatherStats.sys.country[i]}</p><p>Feels like ${weatherStats.main.feels_like[i]} <sup>o</sup>C ${weatherStats.weather[0].description[i]}.${weatherStats.weather[0].main[i]}</p><p><img src=http://openweathermap.org/img/wn/${weatherStats.weather[0].icon[i]}@2x.png />${weatherStats.main.temp[i]}</p>`);
                } else {
                    console.log(weatherStats.name);
                    // $(('.city__weatherInfo p').eq(0)).before(openWeatherMapFlag);
                    $('.city__weatherInfo').html(`<p>${weatherStats.name}, ${weatherStats.sys.country}</p><p>Feels like ${weatherStats.main.feels_like} <sup>o</sup>C ${weatherStats.weather[0].description}.${weatherStats.weather[0].main}</p><p><img src=http://openweathermap.org/img/wn/${weatherStats.weather[0].icon}@2x.png />${weatherStats.main.temp}</p>`);
                }
            }
        } else {
            alert("You're not online");
        }
    }
    DOM_Manipulation();

    return (
        <div className="cities">
            <div className="city__weatherInfo">
            </div>
        </div>
    )
}

export default Cities;
