import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = ({course}) => {
    return (
      <div>
        <h1>{course}</h1>
      </div>
    )
  }

  const Part = ({part, exercises}) => {
    return (
      <div>
        {part}: {exercises}
      </div>
    )
  }

  const Content = ({part1, part2, part3, exercises1, exercises2, exercises3}) => {
    return (
      <div>
          <Part part={part1} exercises={exercises1}/><br/>
          <Part part={part2} exercises={exercises2}/><br/>
          <Part part={part3} exercises={exercises3}/><br/>
      </div>
    )
  }

  const Total = ({exercises1, exercises2, exercises3}) => {
    const sum = exercises1 + exercises2 + exercises3
    return (
      <div>
        <p>Number of exercises: {sum}</p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course}/>
      <Content 
        part1 = {part1}
        part2 = {part2}
        part3 = {part3}
        exercises1 = {exercises1}
        exercises2 = {exercises2}
        exercises3 = {exercises3}
      />
      <Total 
        exercises1 = {exercises1}
        exercises2 = {exercises2}
        exercises3 = {exercises3}
      />
    </div>
  )
}

export default App