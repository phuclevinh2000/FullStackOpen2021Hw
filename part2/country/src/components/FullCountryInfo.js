import React from 'react'

const FullCountryInfo = ({name, capital, population, languages, flag}) => {
    console.log(languages)
    return (
        <div>
            <h1>{name}</h1>
            <p>capital {capital}</p>
            <p>population {population}</p>
            <h1>Language</h1>
            <ul>
                {languages.map(note => 
                    <li key={note.id}>
                        {note.name}
                    </li>
                )}
            </ul>
            <img src={flag} alt="flag"></img>
        </div>
    )
}

export default FullCountryInfo
