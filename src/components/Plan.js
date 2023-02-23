import React from 'react';


// styles
import Styles from "../style/Plan.module.css"

// icons
import Trash from "../style/trash.svg"
import Edit from "../style/edit.svg"

const Plan = ({data,RemovePlan,EditPlan}) => {


    const plandata = document.getElementById('plandata')
    return (
        <div className={Styles.plan}>
            <p  id='plandata' className={Styles.text}>{data}</p>
            <div> 
                <img onClick={() => RemovePlan(data)} className={Styles.Trash} src={Trash}></img>
                <img onClick={() => EditPlan(data)} className={Styles.Edit} src={Edit}></img>

            </div>
        </div>
    );
};

export default Plan;