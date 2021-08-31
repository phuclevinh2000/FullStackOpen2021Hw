import React from 'react'
import Note from './Note'

const Filter = ({filterChange, filterPerson, filter}) => {
    return (
        <div>
            name: <input value={filter} onChange={filterChange}/>
            {filterPerson.map(person =>      //use map to fetch all the name in persons
                <Note key={person.name} name={person.name} number={person.number}/>
            )}
        </div>
    )
}

export default Filter
