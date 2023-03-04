import React from 'react';

// Hooks
import { useState } from 'react';
// styles
import Styles from "../style/Plan.module.css"

// icons
import Trash from "../style/trash.svg"
import Edit from "../style/edit.svg"

const Plan = ({data,RemovePlan,EditPlan,checkplan}) => {

  

    const plandata = document.getElementById('plandata')

    const chackHandler = (value) => {

        if(value==true){
            checkplan("DO")
        }
        else{
            checkplan("notDO")

        }
    }


    const [isChecked, setIsChecked] = useState(false);

    function handleCheckboxChange(event) {
      setIsChecked(event.target.checked);
      console.log(event.target.checked)
    }

    return (
        <div className={Styles.plan}>

            <input type='checkbox' id='checkbut'
             className={Styles.inputDo} onClick={(event) =>  chackHandler(event.target.checked)}
                checked={isChecked}
                onChange={handleCheckboxChange}
              ></input>

            <p  id='plandata' className={Styles.text}>{data}</p>
            <div> 
                <img onClick={() => RemovePlan(data)} className={Styles.Trash} src={Trash}></img>
                <img onClick={() => EditPlan(data)} className={Styles.Edit} src={Edit}></img>

            </div>
        </div>
    );
};

export default Plan;