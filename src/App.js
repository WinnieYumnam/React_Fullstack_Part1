import { useState } from 'react'

const points = new Array(8).fill(0);
let copyPoints = [...points];

let max = copyPoints[0];
let index = 0;

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]  

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(0)

  const getAnecdote = () => {    
    const choose = Math.floor((Math.random() * anecdotes.length) + 1);    
    console.log("element choosen",copyPoints[choose])
    setVote(copyPoints[choose])
    return(      
      setSelected(choose)
    )
  };
  console.log("Number choosen: ", selected);

  const giveVote = () => {   
    copyPoints[selected] = vote+1;        
    return(
      setVote(copyPoints[selected])
    )
  };   
  copyPoints[selected] = vote
  console.log("after setting vote", copyPoints);


  const MaxVote = ({arr}) => {
    console.log("final array", arr)   
    max = Math.max(...arr);
    index = arr.indexOf(max);  
    console.log("anecdotes", anecdotes[index])  
    return anecdotes[index];
  };
  
  return (
    <div>
      <h3>Anecdote of the day</h3>
      <p>{anecdotes[selected]}</p>
      <p>has {vote} votes</p>
      <button onClick = {giveVote}>vote</button>
      <button onClick = {getAnecdote}>next anecdote</button> 
      <h3>Anecdote with most votes</h3> 
      <MaxVote arr = {copyPoints}/>
      <p>has {copyPoints[index]} votes</p>
    </div>
  )
}

export default App