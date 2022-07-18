import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { createContext } from "react";

export const WeatherContext = createContext<any>(null);

export const WeatherProvider = (props: any) => {
    const [currentWeather, setCurrentWeather] = useState(null)
    const [futureWeather, setFutureWeather] = useState(null)
    const [locationName, setLocationName] = useState('jakarta')
    const [location, setLocation] = useState({
        cityName: locationName,
        longitude: '106.8451',
        latitude: '-6.2146',
    })

    const BASE_URL = `https://api.openweathermap.org/data/2.5/`
    const CURRENT_WEATHER = `weather?q=${locationName}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
    const FUTURE_WEATHER = `forecast?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.REACT_APP_API_KEY}`

    const getCurrentWeather = useCallback(
        () => {
           axios.get(BASE_URL+CURRENT_WEATHER).then(res => {
               setCurrentWeather(res.data)
               const newLocation = {
                   cityName: res.data.name.toLowerCase(),
                   longitude: res.data.coord.lon,
                   latitude: res.data.coord.lat,
               }
               setLocation(newLocation)
           });
        },
        [BASE_URL, CURRENT_WEATHER],
      )

    const getFutureWeather = useCallback(
      () => {
        axios.get(BASE_URL+FUTURE_WEATHER).then(res => {
            setFutureWeather(res.data)
        })
      },
      [BASE_URL, FUTURE_WEATHER],
    )

    useEffect(() => {
        getCurrentWeather()
        getFutureWeather()
    }, [getCurrentWeather, getFutureWeather])

    return (
        <WeatherContext.Provider value={{ currentWeather, futureWeather, location, setLocationName, locationName }}>
            {props.children}
        </WeatherContext.Provider>
    )
}