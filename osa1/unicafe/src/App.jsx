import React from "react"
import { useState } from "react"
import Statistics from "./Statistics"
import Button from "./Button"

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const average = (good + neutral + bad) / 3
  const total = good + neutral + bad
  const positive = good / total 

  const handleClickGood = () => {
    setGood(prev => (prev + 1))
  }

  const handleClickNeutral = () => {
    setNeutral(prev => (prev + 1))
  }

  const handleClickBad = () => {
    setBad(prev => (prev + 1))
  }
  
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button 
        goodBtn="Good"
        neutralBtn="Neutral"
        badBtn="Bad"
        HandleClickGood={handleClickGood}
        HandleClickNeutral={handleClickNeutral}
        HandleClickBad={handleClickBad}
      />
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App
