import React from 'react'
import Note from './Note'

const Filter = ({filterChange, filterPerson, filters}) => {
    return (
        <div>
            name: <input value={filters} onChange={filterChange}/>
            {
                filters 
                ? filterPerson.map(person =>      //use map to fetch all the name in persons
                    <Note key={person.name} name={person.name} number={person.number}/>
                )
                : null
            }
            
        </div>
    )
}

export default Filter
