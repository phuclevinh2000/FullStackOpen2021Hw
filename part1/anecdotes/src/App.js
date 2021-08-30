import React, { useState } from 'react'

const Anecdote = ({anecdote,votes}) => {
  return (
    <div>
      {anecdote} <br />
      has {votes} vote(s)
    </div>
  )
}

const Header = ({value}) => {
  return (
    <h1>
      {value}
    </h1>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes]  = useState(new Uint8Array(7))
  const [mostVote, setMostVote] = useState(0)
  
  const vote = () => {
    const newVotes = [...votes]   //copy old array into a new one
    newVotes[selected]++
    setVotes(newVotes)
    if(votes[selected]>=votes[mostVote]) setMostVote(selected)
  }

  const next = () => {
    let random = Math.floor(Math.random() * anecdotes.length)
    while(random === selected) {
      random = Math.floor(Math.random() * anecdotes.length)
    }

    setSelected(random)
  }

  return (
    
    <div>
      <Header value="Anecdote of the day"/>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <button onClick={vote}>Vote</button>
      <button onClick={next}>Next</button>
      <Header value="Anecdote with most votes"/>
      <Anecdote anecdote={anecdotes[mostVote]} votes={votes[mostVote]} />
    </div>
  )
}

export default App