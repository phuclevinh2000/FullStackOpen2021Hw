import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Header = ({head}) => {
    return (
      <h1>
        {head}
      </h1>
    )
  }

  const Button = () => {
    return (
      <div>
        <button onClick={() => setGood(good+1)}>good</button>
        <button onClick={() => setNeutral(neutral+1)}>neutral</button>
        <button onClick={() => setBad(bad+1)}>bad</button>
      </div>
    )
  }

  const Result = () => {
    return (
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
      </div>
    )
  }
  
  return (
    <div>
      <Header head="give feedback"/>
      <Button />
      <Header head="give feedback"/>
      <Result />
    </div>
  )
}

export default App