import {Render} from './hooks';
import ChildComponent from './childComponent';
 import { useState } from "react";

const Header = (props) => {
  console.log("This is inside Header component " +props.course);
  return(
    <div>
      <h1>{props.course}</h1>
    </div>    
  )
}

const Content = (props)=>{
  console.log("This is inside Content component "+props.partName0);
  return(
    <div>
      <p> Title: {props.partName}</p>
      <p> Number of exercise: {props.partExercise}</p>
    </div>
  )
}

const Total =(props) =>{
  console.log("This is iniside Total component "+props.exercises);
  return(
    <div>
      <p>Total number of exercises = {props.exercises}</p>
    </div>
  )
}

const Exercise = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const [dataFromChild, setDataFromChild] = useState("");
  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };
  return (
    <>      
      <Header course={course.name} />
      <Content partName={course.parts[0].name} partExercise = {course.parts[0].exercises}/>
      <Content partName={course.parts[1].name} partExercise = {course.parts[1].exercises}/>
      <Content partName={course.parts[2].name} partExercise = {course.parts[2].exercises}/>
      <Total exercises={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
      <Render/>
      <h3>This is a Parent Component</h3>
      <ChildComponent sendData={handleDataFromChild}/>
      <p>Data from child: {dataFromChild}</p>
    </>
  )
}

export default Exercise
