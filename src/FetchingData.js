import React, { useState, useEffect, useContext } from 'react';
import Cities from './Cities';
import Pagination from './Pagination';
import { CityNameContext } from './Main';
import $ from 'jquery';

export const WeatherStatsContext = React.createContext();
export const CityCountContext = React.createContext();
export const IdenticalCitiesContext = React.createContext();

function FetchingData() {
    
    const [weather_Stats, setWeather_Stats] = useState({});
    const [totalIdenticalCities, setTotalIdenticalCities] = useState();
    const [country_Name, setCountry_Name] = useState("");
    const [city_Count, setCity_Count] = useState(0);
    console.log(weather_Stats);
    console.log(totalIdenticalCities);

    const cityName = useContext(CityNameContext);
    
    const openWeatherMapURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=1cc7ad57a30f3ba7be0d6a9766a69562`;
    const openWeatherMapFlag = `http://openweathermap.org/images/flags/${country_Name.toLowerCase()}.png`;
    // console.log(openWeatherMapURL);

    useEffect(() => {
        $(function() {
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
            
            const countIdenticalCities = () => {
                weather_Stats.name.map(cities => (
                    setTotalIdenticalCities(cities)
                ));
            };
            countIdenticalCities();
        });
    }, [cityName]);

    return (
        <WeatherStatsContext.Provider value={ weather_Stats }>
            <CityCountContext.Provider value={ city_Count }>
                <IdenticalCitiesContext.Provider value={ totalIdenticalCities }>
                    <Cities />
                    <Pagination />
                </IdenticalCitiesContext.Provider>
            </CityCountContext.Provider>
        </WeatherStatsContext.Provider>
    )

}

export default FetchingData;
