import React, { useState, useEffect, useContext } from 'react';
import './Cities.css';
import { CityContext } from './Main';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cities() {

    const [weather_Stats, setWeather_Stats] = useState({});
    const [country_Name, setCountry_Name] = useState("");
    const [search_ID, setSearch_ID] = useState("");
    const [recently_Viewed, setRecently_Viewed] = useState("");

    const cityName = useContext(CityContext);
    console.log(cityName);

    let isOnline = window.navigator.onLine;

    const openWeatherMapURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=1cc7ad57a30f3ba7be0d6a9766a69562`;
    const openWeatherMapFlag = `http://openweathermap.org/images/flags/${country_Name.toLowerCase()}.png`;
    console.log(openWeatherMapURL);

    useEffect(() => {
            async function getOpenWeatherMapData() {
                let response = await $.ajax({
                        url: openWeatherMapURL,
                        type: "GET",
                        dataType: "json",
                        success: function(data) {
                            return data;
                        },
                        error: (err) => {
                            /* 
                            err.responseJSON.cod
                            err.responseJSON.message
                            err.statusCode.statusText
                             */
                            console.log(`Error code:${err.responseJSON.cod}\nError message:${err.responseJSON.message}\nStatus text:${err.statusCode.statusText}`);
                        }
                    });
                return response;
            }
            getOpenWeatherMapData()
                .then(data => {
                    setWeather_Stats(data);
                })
                .catch((error) => {
                  console.log(`Error code:${error.responseJSON.cod}\nError message:${error.responseJSON.message}\nStatus text:${error.statusCode.statusText}`)
                });
    }, [cityName]);

    console.log(weather_Stats);

    /* if(isOnline) {
        for (const city of weather_Stats.name) {
            if (cityName !== weather_Stats.name[city]) {
                console.log(weather_Stats.name[city]);
                // $(('.city__weatherInfo p').eq(0)).before(openWeatherMapFlag);
                $('.city__weatherInfo').html(`<p>${weather_Stats.name[city]}, ${weather_Stats.sys.country[city]}</p><p>Feels like ${weather_Stats.main.feels_like[city]} <sup>o</sup>C ${weather_Stats.weather[0].description[city]}.${weather_Stats.weather[0].main[city]}</p><p><img src=http://openweathermap.org/img/wn/${weather_Stats.weather[0].icon[city]}@2x.png />${weather_Stats.main.temp[city]}</p>`);
            } else {
                console.log(weather_Stats.name);
                // $(('.city__weatherInfo p').eq(0)).before(openWeatherMapFlag);
                $('.city__weatherInfo').html(`<p>${weather_Stats.name}, ${weather_Stats.sys.country}</p><p>Feels like ${weather_Stats.main.feels_like} <sup>o</sup>C ${weather_Stats.weather[0].description}.${weather_Stats.weather[0].main}</p><p><img src=http://openweathermap.org/img/wn/${weather_Stats.weather[0].icon}@2x.png />${weather_Stats.main.temp}</p>`);
            }
        }
    } else {
        alert("You're not online");
    } */

    return (
        <div className="cities">
            <div className="city__weatherInfo">
            </div>
        </div>
    )
}

export default Cities;
