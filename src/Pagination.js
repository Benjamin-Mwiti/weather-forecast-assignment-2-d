import React, { useState, useContext } from 'react';
import { CityCountContext, IdenticalCitiesContext } from "./FetchingData";
import { Nav } from 'react-bootstrap';

function Pagination() {

    const [current_Page, setCurrent_Page] = useState(1);
    const [cityDisplayCount, setCityDisplayCount] = useState(3);

    let cityCount = useContext(CityCountContext);
    let totalCities = useContext(IdenticalCitiesContext);
    const pageCount = [];
    const lastCityIndex = current_Page * cityDisplayCount;
    const firstCityIndex = lastCityIndex - cityDisplayCount;
    const currentDisplayedCities = totalCities.slice(firstCityIndex, lastCityIndex);

    for (let i = 0; i < Math.ceil(totalCities / cityDisplayCount); i++) {
        pageCount.push(i);
        
    }

    return (
        <div>
            <Nav>
                <ul>
                    {
                        pageCount.map(number => (
                            <li key={number}>
                                <a href="!#">
                                    {number}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </Nav>
        </div>
    )
}

export default Pagination;
