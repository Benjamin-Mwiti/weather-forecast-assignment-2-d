import React, { useState, useEffect, useContext } from 'react';
import './Cities.css';
import { CityNameContext } from './Main';
// import Pagination from './Pagination';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

export const CityCountContext = React.createContext();
export const IdenticalCitiesContext = React.createContext();

function Cities() {

    const [search_ID, setSearch_ID] = useState();
    const [recently_Viewed, setRecently_Viewed] = useState();
    const [totalIdenticalCities, setTotalIdenticalCities] = useState([]);
    const [country_Name, setCountry_Name] = useState("");
    const [city_Count, setCity_Count] = useState(0);
    const [latLon, setLatLon] = useState([]);

    const cityName = useContext(CityNameContext);
        
    const openWeatherMapURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=1cc7ad57a30f3ba7be0d6a9766a69562`;
    // const openWeatherMapFlag = `http://openweathermap.org/images/flags/${country_Name.toLowerCase()}.png`;
    // console.log(openWeatherMapURL);

 /*    useEffect(() => {
        async function getGeoCoords() {
            if(navigator.geolocation) {
                try {
                    let Location = await navigator.geolocation.getCurrentPosition(currentPosition => {
                        let Latitude = currentPosition.coords.latitude.toFixed(2);
                        let Longitude = currentPosition.coords.longitude.toFixed(2);
                        setLatLon(Latitude, Longitude);
                    });
                    return Location;
                } catch(error) {
                    switch(error.code) {
                        case error.PERMISSION_DENIED:
                            alert("User denied the request for Geolocation.");
                            break;
                        case error.POSITION_UNAVAILABLE:
                            alert("Location information is unavailable.");
                            break;
                        case error.TIMEOUT:
                            alert("The request to get user location timed out.");
                            break;
                        case error.UNKNOWN_ERROR:
                            alert("An unknown error occurred.");
                            break;
                        default:
                            alert(error);
                }
            }
        };
        getGeoCoords();
    }); */

    useEffect(() => {
        async function getOpenWeatherMapData() {
            const fetchedData = await fetch(openWeatherMapURL);
            const response = await fetchedData.json();
            return response;
        }
        getOpenWeatherMapData()
            .then(data => {
                
                let isOnline = window.navigator.onLine;

                const DOM_Manipulation = () => {
                    if(isOnline) {
                        // console.log(data.name);
                        // $(('.city__weatherInfo p').eq(0)).before(openWeatherMapFlag);
                        $(function() {
                            $('.city__weatherInfo').html(`<p>${data.name}, ${data.sys.country}</p><p>Feels like ${data.main.feels_like} <sup>o</sup>C ${data.weather[0].description}.${data.weather[0].main}</p><p><img src=http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png />${data.main.temp}</p>`);
                        });
                    } else {
                        alert("You're not online");
                    }
                }
                DOM_Manipulation();

            })
            .catch((error) => {
                console.log(error)
            });
    }, [cityName]);

    return (
        <div className="cities">
            <CityCountContext.Provider value={ city_Count }>
                <IdenticalCitiesContext.Provider value={ totalIdenticalCities }>
                    {/* <Pagination /> */}
                </IdenticalCitiesContext.Provider>
            </CityCountContext.Provider>
            <div className="city__weatherInfo">
            </div>
        </div>
    )
}

export default Cities;
