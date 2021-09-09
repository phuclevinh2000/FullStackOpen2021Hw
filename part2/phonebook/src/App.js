import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import Header from './components/Header'
import Form from './components/Form'
import Filter from './components/Filter'
import personsService from './services/persons'
import Notification from './components/Notification'
import FailNotification from './components/FailNotification'
import "./index.css"

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filters, setFilters ] = useState('')
  const [ noti, setNoti ] = useState('')
  const [ failNoti, setFailNoti] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(initialNotes => {
        setPersons(initialNotes)
      })
  }, [])

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
      if(check) { //check if "check is found"
        if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {  //if found then ask if you want to replace the old content: ;
          const id = persons.find(element => element.name === newName).id
          personsService
            .update(id, note)
            .then(personAfterUpdate => {
              const newPerson = persons.map(note => note.id !== id ? note : personAfterUpdate)
              setPersons(newPerson)
            })
          .catch(error => {
            // alert("The new information has been updated")
            setFailNoti(`Information of ${note.name} has already been removed from server, please refresed the page to see the change`)
            setTimeout(() => {            //clear the notification after 5 seconds
              setFailNoti(null)
            }, 5000)
          })
        }
      }
      else  {
        personsService
        .create(note)
        .then(initialNotes => {
          setPersons(persons.concat(initialNotes))
          setNewName('')  //clear the input
          setNewNumber('')
          setNoti(`Added ${note.name}`) //set the notification  box
          setTimeout(() => {            //clear the notification after 5 seconds
            setNoti(null)
          }, 5000)
        })
       
        setPersons(persons.concat(note))  //copy the new object to the end of the old object
      }
      setNewName('')  //clear the input
      setNewNumber('') 
    } 
  }

  const handleDelete = (id, name) => {
    const findPersonId =  id;
    
    // console.log(name)
    if (window.confirm(`Delete ${name}`)) {
      personsService
        .remove(findPersonId)
        .then(response => {
          setPersons(persons.filter(person => person.id!==id))
        })
    }
  }

  return (
    <div>
      <Header head="Phonebook"/>
      {
        noti ? <Notification message={noti}/> : null  //display the notification if added info
      }
      {
        failNoti ? <FailNotification message={failNoti}/> : null  //display the fail notification if added info
      }
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
        <Note key={person.id} id={person.id} name={person.name} number={person.number} handleDelete={handleDelete}/>
      )}
    </div>
  )
}

export default App