import React from 'react';


// styles
import Styles from "../style/Plans.module.css"

// component 
import Plan from './Plan';

const Plans = ({state,setstate ,RemovePlan,EditPlan,checkplan}) => {

    return (
        <div className={Styles.container}>
            {state && state.map( plan =>  <Plan checkplan={checkplan} RemovePlan={RemovePlan} EditPlan={EditPlan} key={Math.random()*1220} data={plan}></Plan> )}
        </div>
    );
};

export default Plans;