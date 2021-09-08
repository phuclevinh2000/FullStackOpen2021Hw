import React from 'react'

const Note = ({name, number, handleDelete, id}) => {
    return (
        <div>
            {name} {number} <button onClick={() => handleDelete(id, name)}>delete</button>
        </div>
    )
}

export default Note
