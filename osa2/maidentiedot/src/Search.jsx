import React, { useState, useEffect } from "react";
import Service from "./Service";
import Weather from "./Weather";

function Search() {

    const [country, setCountry] = useState("")
    const [allCountries, setAllCountries] = useState([])
    const [allCountrieNames, setAllCountrieNames] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [tooManyMatches, setTooManyMatches] = useState(false)
    const [oneMatch, setOneMatch] = useState(false)
    const [oneCountry, setOneCountry] = useState([
        {
            name: "",
            capital: "",
            area: "",
            flag: "",
            languages: []
        }
    ])

    useEffect(() => {
        const search = async() => {
            try {
                const response = await Service.getAll()
                setAllCountries(response)
            } catch(error) {
                console.error(error)
            }
        }
        search()
    }, [])


    useEffect(() => {
        setAllCountrieNames([])
        for(let i = 0; i < allCountries.length; i++) {
            setAllCountrieNames(prev => [...prev, allCountries[i].name['common']])
        }
    }, [allCountries])


    const getOneCountry = async(name) => {
        try {
            const response = await Service.getOne(name)
            const newObj = [{
                name: response.name['common'],
                capital: response.capital[0],
                area: response.area,
                flag: response.flags['png'],
                languages: Object.values(response.languages)
            }]
            setOneCountry(newObj)
        } catch(error) {
            console.error
        }
    }
    

    useEffect(() => {
        const matchingCountries = [];
        if(country === "") {
            setFilteredCountries([])
            setTooManyMatches(false)
            setOneMatch(false)
        } else {
            for (let i = 0; i < allCountrieNames.length; i++) {
                const countryName = allCountrieNames[i]
                if (countryName.toLowerCase().startsWith(country.toLowerCase())) {
                    matchingCountries.push(countryName);
                }
            }
            if(matchingCountries.length > 10) {
                setTooManyMatches(true)
                setOneMatch(false)
            } else if(matchingCountries.length <= 10 && matchingCountries.length > 1) {
                setTooManyMatches(false)
                setOneMatch(false)
            } else {
                getOneCountry(matchingCountries[0])
                setTooManyMatches(false)
                setOneMatch(true)
            }
        }
       setFilteredCountries(matchingCountries)
    }, [country, allCountrieNames]);

    

    const handleChange = (event) => {
        setCountry(event.target.value)
    }

    const showCountryDetails = (country) => {
        setOneMatch(true)
        getOneCountry(country)
        setTooManyMatches(false)
    }

    return(
        <div>
            <h3>find countries</h3>
            <input value={country} onChange={handleChange}/>
            <div>
                {tooManyMatches ? "Too many matches, specify another filter" : !oneMatch ? filteredCountries.map((country, key) => {
                    return (
                        <div key={key}>
                            <h3>{country} <button onClick={() => showCountryDetails(country)}>Show</button></h3>
                        </div>
                    )
                }) : oneCountry.map((item, key) => {
                    const languageMap = item.languages.map((item, key) => {
                        return (
                            <ul key={key}>
                                <li>{item}</li>
                            </ul>
                        )
                    })
                    return (
                        <div key={key}>
                            <h2>{item.name}</h2>
                            <h3>Capital {item.capital}</h3>
                            <h3>area {item.area}</h3>
                            <h3>Languages: </h3>
                            {languageMap}
                            <img src={item.flag} />
                        </div>
                    )
                })}
            </div>
            <Weather 
                oneCountry={oneCountry}
                oneMatch={oneMatch}
            />
        </div>
    )
}
export default Search