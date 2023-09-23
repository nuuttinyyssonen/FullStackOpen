import React, { useEffect, useState } from "react";
import Service from "./Service";

function Weather({oneCountry, oneMatch}) {

    const [weather, setWeather] = useState([
        {
            temperature: 0,
            windSpeed: 0,
            pic: "",
        }
    ])


    useEffect(() => {
        if(oneMatch) {
            const getWeatherData = async() => {
                try {
                    const response = await Service.getWeather(oneCountry[0].name)
                    const newObj = [
                        {
                            temperature: Math.floor(response.main['temp'] - 273.15),
                            windSpeed: response.wind['speed'],
                            pic: "https://openweathermap.org/img/wn/" +response.weather[0]['icon'] + "@2x.png"
                        }
                    ]
                    setWeather(newObj)
                } catch(error) {
                    console.error(error)
                }
            }
            getWeatherData()
        }
    }, [oneCountry])

    return(
        <div>
            {oneMatch ? weather.map((item, key) => {
                return(
                    <div>
                        <h3>Temperature {item.temperature} Celcius</h3>
                        <img src={item.pic}/>
                        <h3>Wind {item.windSpeed} m/s</h3>
                    </div>
                )
            }) : ""}
        </div>
    )
}

export default Weather