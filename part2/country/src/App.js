import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Filter from './components/Filter';

const App = () => {
  const [countries, setCountries] = useState([])
  const [filters, setFilters] = useState('')
  

  //fetch data from API 
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        // console.log(response.data)
        setCountries(response.data)
      })
  }, [])

  const filterChange = (event) => {
    setFilters(event.target.value)
  }

  let list = filters
  ? countries.filter(country => country.name.toLowerCase().includes(filters.toLowerCase()))
  : countries

  return(
    <div>
      <Filter 
        filterChange={filterChange}
        filters={filters}
        list={list}
      />
    </div>
  )
}

export default App;
