import React from 'react'

const Filter = ({filterChange, filterPerson, filter}) => {
    return (
        <div>
            name: <input value={filter} onChange={filterChange}/>
            {filterPerson}
        </div>
    )
}

export default Filter
