import React, {useState, useEffect} from 'react'
import '../style/Countries.scss';
import { BrowserRouter as Link} from "react-router-dom";


const url = 'https://restcountries.eu/rest/v2/all'

export const Countries = () => {
    const [countries, setCountries] = useState([])

    const fetchCountryData = async()=>{
        const response = await fetch(url)
        const resCountry = await response.json()
        setCountries(resCountry)
        console.log(resCountry)
    }

    useEffect(()=>{
        fetchCountryData();
    }, [])


    return (
        <div>

        <div className="container-fixed">
                <div className="container">
                    {countries.map((country)=>{
                        const {numericCode, name, population, region, capital, flag} = country
                        return(
                            <Link key={numericCode} to={`/countries/${name}`}>
                            <article >
                                <div className="each-country">
                                    <div className="image-container" style={{backgroundImage:'url('+flag+')',}} >
                                    </div>

                                    <div className="country-content">

                                    <h3>{name}</h3>
                                   
                                    <h4>
                                        Population: <span> {population >= 0 ? population : 'Do not have'} </span>
                                        
                                    </h4>

                                    <h4>Region: <span> {region} </span> </h4>

                                    <h4>
                                        Capital: <span> {capital === '' ? 'Do not have' : capital} </span>
                                        
                                    </h4>
                                    </div>
                                </div>
                            </article>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Countries;
