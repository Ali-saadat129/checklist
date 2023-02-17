import React from 'react';
// hooks
import { useState } from 'react';
// style
import Styles from "../style/Main.module.css"
// icon 
import Tea from "../style/Tea.svg"
import line from "../style/line.svg"
import Plans from './Plans';




const Main = () => {
    
    const [planstate,setplan] = useState([])
    const[tempState,setTemp] = useState("")

// set value of temperary state from input
    const inputHandler = (event) => {
        setTemp( event.target.value)
    }

// add temperary state to totall state
    const AddPlan = () => {
        setplan(() => [...planstate, tempState ])
        setTemp("")
    }

    return (
        <div className={Styles.container}>

            <div className={Styles.header}>
                <img className={Styles.threeline} src={line}></img>
                <img className={Styles.Tea} src={Tea}></img>
                <h3>Good morning </h3>
            </div>

            <div className={Styles.title}>
                <p className={Styles.titletask}>برنامه روزانه </p>
            </div>
            
            <div>
                <Plans state={planstate} setstate={setplan}></Plans>
            </div>

            <div className={Styles.inputParent}>
                <input value={tempState} onChange={inputHandler} placeholder=" add your plan"></input>   
                <button onClick={AddPlan} > Add</button>
            </div>


        </div>
    );
};

export default Main;