import React, { useState } from 'react'

const Header = ({head}) => {
  return (
    <h1>
      {head}
    </h1>
  )
}

const Button = ({good, setGood, bad, setBad, neutral, setNeutral}) => {
  return (
    <div>
      <button onClick={() => setGood(good+1)}>good</button>
      <button onClick={() => setNeutral(neutral+1)}>neutral</button>
      <button onClick={() => setBad(bad+1)}>bad</button>
    </div>
  )
}

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>   
    </tr>
  )
}

const StatisticLine = ({good, bad, neutral}) => {
  const all = good + bad + neutral
  const positive = good *100 / all
  const average = (good - bad) / all
  return (
    <div>
      <table>
        <tbody>
          <Statistic text="good" value={good}/>
          <Statistic text="neutral" value={neutral}/>
          <Statistic text="bad" value={bad}/>
          <Statistic text="all" value={all}/>
          <Statistic text="average" value={average}/>
          <Statistic text="positive" value={`${positive}%`}/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <Header head="give feedback"/>
      <Button 
        good={good} 
        setGood={setGood}
        bad={bad}
        setBad={setBad}
        neutral={neutral}
        setNeutral={setNeutral}/>
      <Header head="statistics"/>
      { (good !== 0 || bad !== 0 || neutral !== 0) 
        ? <div>
          <StatisticLine 
            good={good} 
            bad={bad}
            neutral={neutral}
          />
        </div>
        : <p>No feedback given</p>
      }
    </div>
  )
}

export default App