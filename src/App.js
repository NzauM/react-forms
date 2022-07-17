import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import WelcomePage from './Welcomepage';
import Contactus from './Contactus';
import Button from './Button';
import {Alert, Tab} from 'react-bootstrap'
// import Home from './Home';
// import Student from './Student';

function App() {
  const[name, setName] = useState("Mercy")
  // const[likes, setLikes] = useState(0)
  // const[likes2, setLikes2] = useState(0)
  // const[likes3, setLikes3] = useState(0)
  // const[likes4, setLikes4] = useState(0)
  // const[likes5, setLikes5] = useState(0)

  function changeName(){
    setName('Leroy')  
    console.log("My name inside function is" + name)
  }

  function changeName2(){
    setName('Daisy')
    console.log("My name inside function2 is" + name)
  }

  console.log("My name outside function is" + name)
  const tms = ["Mercy","Stella","Howard", "Wilson", "Kelvin","Abzed"]

  const hobbies = {
    hobby1: "Asking questions",
    hobby2: "Coding"
  }


  
  const hobBtn = Object.keys(hobbies).map((elem, index)=>{
    // console.log(index)
    // console.log(elem)
    return(<Button key={index} name="Mercy" hobby={hobbies[elem]}></Button>)
  })
   
  function handleClick(){
    alert("Event handled")
  }
  function handleInput(e){
    console.log(e.target.value)
  }
  return (
    <div className="App">
    <Alert variant={"primary"}>App component Begins here...</Alert>
      {hobBtn}
      {/* {tmBtn} */}
      {/* <Homepage/> */}
      {/* <Button hobby="Swimming"></Button> */}
      <WelcomePage/>
      <Contactus tel="0700234567" email="mercy@gmail.com"/>
      <Contactus tel="0707234567" email="shorry@gmail.com"/>
      <button onClick={handleClick}>This is a normal JSX Button</button>
      <input  onChange={handleInput}></input>
      <button onClick={changeName}>Change My Name</button>
      <button onClick={changeName2}>Change My Name Again</button>
      {/* <Home name="Mercy"/> */}
      {/* {studentList} */}
    </div>
    
  );
}

export default App;
