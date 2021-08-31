import React, { useState } from 'react'
import Note from './components/Note'
import Header from './components/Header'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: "040-1234567" },  //hardcode some name and number
    { name: 'Ada Lovelace',
      number: "113"}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    //create a new object by what you typed
    const note = {
      name: newName,
      number: newNumber
    }

    const check = persons.find(element => element.name === newName) //find the duplicate name

    // console.log(note.name)
    if(note.name === "" || note.number === "") {  //check if name and number is missing 
      alert("missing name or number")
    } else {
      check //check if "check is found"
        ? alert(`${newName} is already added to phonebook`)  //if found then alert
        : setPersons(persons.concat(note))  //copy the new object to the end of the old object

      setNewName('')  //clear the input
      setNewNumber('') 
    } 
  }

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    // console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <Header head="Phonebook"/>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Header head="Numbers"/>
      {persons.map(person =>      //use map to fetch all the name in persons
        <Note key={person.name} name={person.name} number={person.number}/>
      )}
    </div>
  )
}

export default App