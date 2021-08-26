import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

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
        part1 = {part1.name}
        part2 = {part2.name}
        part3 = {part3.name}
        exercises1 = {part1.exercises}
        exercises2 = {part2.exercises}
        exercises3 = {part3.exercises}
      />
      <Total 
        exercises1 = {part1.exercises}
        exercises2 = {part2.exercises}
        exercises3 = {part3.exercises}
      />
    </div>
  )
}

export default App