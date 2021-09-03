import React from 'react'
import CountryName from './CountryName'
import FullCountryInfo from './FullCountryInfo'

const Filter = ({filterChange, list, filters}) => {
    return (
        <div>
            find country: <input value={filters} onChange={filterChange}/>
            {
                filters === "" 
                ? <p>Enter country's name to search</p>
                : list.length > 1 && list.length <=10
                    ? list.map(country =>      
                        <CountryName 
                            key={country.name} 
                            name={country.name}
                            country={country}
                            capital={country.capital}
                            population={country.population}
                            languages={country.languages}
                            flag={country.flag}
                        />
                    )
                    : list.length > 10 
                        ? <p>Too many matches, specify another filter</p>
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
