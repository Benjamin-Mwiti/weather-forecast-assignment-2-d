import React, { useState, useContext } from 'react';
import { CityCountContext, IdenticalCitiesContext } from "./FetchingData";
import { Nav } from 'react-bootstrap';

function Pagination() {

    const [current_Page, setCurrent_Page] = useState(1);
    const [cityDisplayCount, setCityDisplayCount] = useState(3);

    const cityCount = useContext(CityCountContext);
    const totalCities = useContext(IdenticalCitiesContext);
    const pageNumbers = [];
    const lastCityIndex = current_Page * cityDisplayCount;
    const firstCityIndex = lastCityIndex * cityDisplayCount;
    const currentCitiesDisplayed = cityCount.slice(firstCityIndex, lastCityIndex);

    for (let i = 0; i < Math.ceil(totalCities / cityDisplayCount); i++) {
        pageNumbers.push(i);
        
    }

    return (
        <div>
            <Nav>
                <ul>
                    {
                        pageNumbers.map(number => (
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
