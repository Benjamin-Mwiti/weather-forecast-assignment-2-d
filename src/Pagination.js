import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';

function Pagination() {

    const [totalCities, setTotalCities] = useState();
    const [current_Page, setCurrent_Page] = useState(1);
    const [cityDisplayCount, setCityDisplayCount] = useState(3);

    const pageNumbers = [];
    const lastCityIndex = current_Page * cityDisplayCount;
    const firstCityIndex = lastCityIndex * cityDisplayCount;
    const currentCitiesDisplayed = city_Count.slice(firstCityIndex, lastCityIndex);

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
