import React from 'react';

// hooks
import { useState,useEffect } from 'react';

// style
import Styles from "../style/Main.module.css"

// icon 
import Tea from "../style/Tea.svg"
import line from "../style/line.svg"
import Plans from './Plans';


// components 
import Setting from './Setting';



const Main = () => {
    console.log(window.innerWidth)
// states 
    const [planstate,setplan] = useState(["این متن برای تست است "])
    const [tempState,setTemp] = useState("")
// ------------------------- functions ----------------------
// set value of temperary state from input
    const inputHandler = (event) => {
        setTemp( event.target.value)
    }

// add temperary state to totall state
    const AddPlan = () => {
        const inputbutton = document.getElementById("inputbutton")
        if(tempState.length){
            if(inputbutton.attributes.whatdo.value=="ADD"){
                setplan(() => [...planstate, tempState ])
                setTemp("")
            }
            if(inputbutton.attributes.whatdo.value=="EDIT"){
                const newplan = planstate
                const indexof = inputbutton.attributes.indexof.value
                newplan[indexof]=tempState
                console.log(newplan)
                setplan(newplan)
                setTemp("")
                inputbutton.setAttribute("whatdo","ADD")
            }
        }
    }
// show Setting page

    const settingHandler = () => {
        const setpage = document.getElementById("setting");
        const header = document.getElementById("header");
        const planParent = document.getElementById("planParent");
        const inputParent = document.getElementById("inputParent");    

        setpage.style.display="block";
        setpage.style.visibility="visible";

        header.style.display="none";
        planParent.style.display="none";
        inputParent.style.display="none";
     
    }
     const setClose = () => {
        const setpage = document.getElementById("setting");
        const header = document.getElementById("header");
        const planParent = document.getElementById("planParent");
        const inputParent = document.getElementById("inputParent");    

        setpage.style.display="none";
        setpage.style.visibility="hidden";

        header.style.display="flex";
        planParent.style.display="flex";
        inputParent.style.display="flex";
     }

// Remove button 
const RemovePlan = (event) => {
    const result = planstate.filter( plan => 
        plan!== event
     )

     setplan(result)
}
// Eedit button 
const EditPlan = (event) => {
    const input =document.getElementById("input");
    input.value = event
    const inputbutton = document.getElementById("inputbutton")
    const newplan = planstate
    const targetIndex = newplan.findIndex((element) => element===event)
    inputbutton.setAttribute("whatdo","EDIT")
    inputbutton.setAttribute("indexof",`${targetIndex}`)
}
    
    return (

        <div className={Styles.container}>
            <div id='setting' className={Styles.Setting}>
                <Setting all={planstate.length} close={setClose} />
            </div>
            <div id='header' className={Styles.header}>
                <img onClick={settingHandler}  className={Styles.threeline} src={line}></img>
                <img className={Styles.Tea} src={Tea}></img>
                <h3>برنامه امروز </h3>
            </div>

            <div id='planParent' className={Styles.planParent}>
                <Plans RemovePlan={RemovePlan} EditPlan={EditPlan} state={planstate} setstate={setplan}></Plans>
            </div>

            <div id='inputParent' className={Styles.inputParent}>
                <input value={tempState} onChange={inputHandler} id='input' placeholder=" add your plan"></input>   
                <button whatdo='ADD' indexof='0' onClick={AddPlan} id='inputbutton' > Add</button>
            </div>


        </div>
    );
};

export default Main;