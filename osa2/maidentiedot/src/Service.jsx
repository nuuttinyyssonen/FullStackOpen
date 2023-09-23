import axios from 'axios';
const url = "https://studies.cs.helsinki.fi/restcountries/api"
const api_key = import.meta.env.VITE_SOME_KEY

const getOne = (country) => {
    const request = axios.get(`${url}/name/${country}`)
    return request.then(response => response.data)
}

const getAll = () => {
    const request = axios.get(`${url}/all`)
    return request.then(response => response.data)
}

const getWeather = (country) => {
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${api_key}`)
    return request.then(response => response.data)
}

export default { 
    getAll: getAll,
    getOne: getOne,
    getWeather: getWeather
}