import React, {useState, useEffect} from 'react'
import '../style/Countries.scss';

const url = 'https://restcountries.eu/rest/v2/all'

export const Countries = () => {
    const [countries, setCountries] = useState([])

    const fetchCountryData = async()=>{
        const response = await fetch(url)
        const resCountry = await response.json()
        setCountries(resCountry)
        //console.log(countries)
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
                            <article key={numericCode}>
                                <div className="each-country">
                                    <div className="image-container" style={{backgroundImage:'url('+flag+')',}} >
                                    </div>
                                    <h3>{name}</h3>
                                    <h4>Population: {population} </h4>
                                    <h4>Region: {region} </h4>
                                    <h4>Capital: {capital} </h4>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Countries;
