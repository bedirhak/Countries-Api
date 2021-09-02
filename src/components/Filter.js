import React from 'react'
import '../style/Filter.scss'
import '../style/index.css'

function Filter() {
    return (
        <div className="container-fixed">
    
            <div className="container">

                <div className="filter-content">

                    <div className="filter-search">
                        <form>
                            <input type="search" name="search" id="search" placeholder="Search for a country..."/>
                        </form>
                   

                    </div>

                    <div className="filter-choose">
                        <select>
                            <option value="Filter by region">Filter by Region</option>
                            <option value="Africa">Africa</option>
                            <option value="Amerika">America</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Ocenia</option>
                           
                        </select>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Filter
