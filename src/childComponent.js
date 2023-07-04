import { useState } from "react";

const ChildComponent = ({sendData}) =>{
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (event) =>{
        setInputValue(event.target.value);
    };

    const sendDataToParent = () => {
        sendData(inputValue)
    };

    return(
        <>
        <h3>Child Component</h3>
        <input type= "text" value = {inputValue} onChange = {handleInputChange}/>
        <button onClick = {sendDataToParent}>Send Data</button>
        </>
    );
}
export default ChildComponent;