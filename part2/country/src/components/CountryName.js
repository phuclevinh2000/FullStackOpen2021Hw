import React, {useState} from 'react'

const CountryName = ({name, country}) => {
    
    const [showResults, setShowResults] = useState(false)

    const onClick = (event) => {
        setShowResults(!showResults)
        // console.log(capital)
    }
    return (
        <div>
            {name}
            <button type="submit" value={country} onClick={onClick}>
                {
                    showResults ? "hide" : "show"   //display the button content                                                    
                }
            </button>
            { showResults //if button is clicked, showResult True then display
                ?   
                    <div>
                        <p>capital {country.capital}</p>
                        <p>population {country.population}</p>
                        <h1>Language</h1>
                        <ul>
                            {country.languages.map(note => 
                                <li key={note.id}>
                                    {note.name}
                                </li>
                            )}
                        </ul>
                        <img src={country.flag} alt="flag"></img>
                    </div>
                : null  //if false then dont display
            }
        </div>
    )
}

export default CountryName
