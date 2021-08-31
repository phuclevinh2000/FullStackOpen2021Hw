import React, { useState } from 'react'
import Note from './components/Note'
import Header from './components/Header'
import Form from './components/Form'
import Filter from './components/Filter'


const App = () => {
  const [persons, setPersons] = useState([  //hardcode some name and number
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filters, setFilters ] = useState('')
  // const [ filterPerson, setFilterPerson ] = useState([])

  const filterChange = (event) => {
    // console.log(event.target.value)
    setFilters(event.target.value)
  }
  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    // console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  let list = filters //create a variable, check if filters exist, if exist then use JS filter, not not then set as persons
  ? persons.filter(person => person.name.toLowerCase().includes(filters.toLowerCase()))
  : persons
  
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

  return (
    <div>
      <Header head="Phonebook"/>
      <Filter 
        filterChange={filterChange}
        filters={filters}
        filterPerson={list}
      />
      <Header head="add a new"/>
      <Form 
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit} 
        newName={newName}
        newNumber={newNumber}
      />
      <Header head="Numbers"/>
      {persons.map(person =>      //use map to fetch all the name in persons
        <Note key={person.name} name={person.name} number={person.number}/>
      )}
    </div>
  )
}

export default App