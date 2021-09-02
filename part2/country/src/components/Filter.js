import React from 'react'
import CountryName from './CountryName'
import FullCountryInfo from './FullCountryInfo'

const Filter = ({filterChange, list, filters}) => {
    return (
        <div>
            find country: <input value={filters} onChange={filterChange}/>
            {
                filters === "" 
                ? <CountryName key={"none-data"} name={"Enter country's name to search"}/> 
                : list.length > 1 && list.length <=10
                    ? list.map(country =>      
                        <CountryName key={country.name} name={country.name}/>
                    )
                    : list.length > 10 
                        ? <CountryName key={"toomuch-data"} name={"Too many matches, specify another filter"}/> 
                        : list.map(country =>      
                            <FullCountryInfo 
                                key={country.name} 
                                name={country.name}
                                capital={country.capital}
                                population={country.population}
                                languages={country.languages}
                                flag={country.flag}
                            />
                        )
            }
            
        </div>
    )
}

export default Filter
