import React, {useState, useEffect} from 'react'
import axios from "axios"

const api = {
    key: "e20b6e3cdc4dfac7786b452bf0b08c04",
  }

const Weather = ({capital}) => {
    const [weather, setWeather] = useState([])

    //fetch data from API
    useEffect(() => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${api.key}&query=${capital}`)
            .then(response => {
                console.log(response.data)
                setWeather(response.data)
            })
    }, [capital])

    return (
        <div>
            <h1>Weather in {capital}</h1>
            <p><strong>temperature:</strong> {weather.current.temperature} Celcius</p>
            <img src={weather.current.weather_icons} alt="#"/>
            <p><strong>wind:</strong> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
        </div>
    )
}

export default Weather
