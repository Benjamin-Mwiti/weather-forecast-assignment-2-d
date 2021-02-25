import React, { useState, useEffect, useContext } from 'react';
import { CityContext } from './Main';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cities() {

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
        $(function() {
            async function getOpenWeatherMapData() {
                let response;
                try {
                    response = await $.ajax({
                        url: openWeatherMapURL,
                        type: "GET",
                        dataType: "json",
                        success: function(data) {
                            if(isOnline) {
                                setCountry_Name(data.sys.country);
                                $(function() {
                                // $(('.city__weatherInfo p').eq(0)).before(openWeatherMapFlag);
                                $('.city__weatherInfo').html("<p>" + data.name + "</p><p>Feels like " + data.main.feels_like + " <sup>o</sup>C " + data.weather[0].description + "." + data.weather[0].main + "</p><p><img src=http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png />" + data.main.temp + "</p>");
                                });
                            } else {
                                alert("You're not online");
                            }
                        },
                        error: (err) => {
                            console.log(err);
                        }
                    });
                } catch(error) {
                    console.log(error);
                }
                finally {
                    return response;
                }
            }
            getOpenWeatherMapData()
                .then(res => {
                    console.log(res);
                    return res;
                });
        });
    }, [cityName]);

    return (
        <div className="cities">
            <div className="city__weatherInfo">
            </div>
        </div>
    )
}

export default Cities;
