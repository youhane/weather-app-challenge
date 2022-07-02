import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const WeatherContext = createContext<any | null>(null);

export const WeatherProvider = (props: any) => {
    const [currentWeather, setCurrentWeather] = useState(null)
    const [futureWeather, setFutureWeather] = useState(null)
    const [location, setLocation] = useState({
        cityName: 'jakarta',
        longitude: '106.8451',
        latitude: '-6.2146',
    })

    const BASE_URL = `https://api.openweathermap.org/data/2.5/`
    const CURRENT_WEATHER = `weather?q=${location.cityName}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
    const FUTURE_WEATHER = `forecast?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.REACT_APP_API_KEY}`

    useEffect(() => {
        axios.get(BASE_URL+CURRENT_WEATHER).then(res => {
            console.log(res.data)
            setCurrentWeather(res.data)
            const newLocation = {
                cityName: res.data.name.toLowerCase(),
                longitude: res.data.coord.lon,
                latitude: res.data.coord.lat,
            }
            setLocation(newLocation)
        });
        axios.get(BASE_URL+FUTURE_WEATHER).then(res => {
            setFutureWeather(res.data)
        })
    }, [BASE_URL, CURRENT_WEATHER, FUTURE_WEATHER])

    return (
        <WeatherContext.Provider value={{ currentWeather, futureWeather, location, setLocation }}>
            {props.children}
        </WeatherContext.Provider>
    )
}