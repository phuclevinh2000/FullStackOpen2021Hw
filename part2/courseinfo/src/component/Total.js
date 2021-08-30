import React from 'react'

const Total = ({parts}) => {
    const sum = parts.reduce(
        (accumulator, currentValue) => accumulator + currentValue.exercises,0
    )
    
    return(
        <strong>Number of {sum} exercises </strong>
    ) 
}

export default Total
