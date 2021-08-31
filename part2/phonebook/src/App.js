import React, { useState } from 'react'
import Note from './components/Note'
import Header from './components/Header'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' },  //hardcode some name
    { name: 'Ada Lovelace'}
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    //create a new object by what you typed
    const note = {
      name: newName
    }

    const check = persons.find(element => element.name === newName) //find the duplicate name

    check ? alert(`${newName} is already added to phonebook`) : 
      //copy the new object to the end of the old object
      setPersons(persons.concat(note))  
      setNewName('')  //clear the input
    
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <Header head="Phonebook"/>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNoteChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Header head="Numbers"/>
      {persons.map(person =>      //use map to fetch all the name in persons
        <Note key={person.name} name={person.name}/>
      )}
    </div>
  )
}

export default App