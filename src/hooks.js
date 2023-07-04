import { useState } from "react";
// const Display = (props) => {  
//     return (
//       <div>{props.counter}</div>
//     )
// }

 //destructuring Display component => single props from {props} to ({counter})
const Display = ({counter}) => <div>{counter}</div>

// const Button=(props) => {
//     return(
//         <button onClick={props.handleClick}>
//         {props.text}
//         </button>
//     )
// }

//destructuring Button component
const Button = ({handleClick, text}) => <button onClick = {handleClick}>{text}</button>

export const Render = ()=>{
    const [ counter, setCounter ] = useState(0) //using React hooks called useState() => it is used to rember the state of component 
    console.log('rendering with counter value', counter)

    const increaseByOne = () => {
        console.log('increasing, value before', counter)
        setCounter(counter + 1)}
    const decreaseByOne = () => {
        console.log('decreasing, value before', counter)
        setCounter(counter - 1)}
    const setToZero = () => {
        console.log('resetting to zero, value before', counter)
        setCounter(0)}
  
    return (
      <div>
        <Display counter={counter}/>
        <Button
          handleClick={increaseByOne}
          text='plus'
        />
        <Button
          handleClick={setToZero}
          text='zero'
        />     
        <Button
          handleClick={decreaseByOne}
          text='minus'
        />           
      </div>
    )
}
