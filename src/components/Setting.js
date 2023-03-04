import React from 'react';

// icons 
import cross from "../style/cross.svg"
// Styles 
import Styles from "../style/Setting.module.css"


// close setting page function 


const Setting = ({ all ,close ,plando}) => {
    return (
        <div >
            <div className={Styles.container}>
            <img onClick={close} id='cross' src={cross}></img>

                <div className={Styles.setpart}>
                    <div className={Styles.set}>
                        <p>Reminders</p>
                        <input type="checkbox" />
                    </div>
                    <div className={Styles.set}>
                        <p>Swipe gestures</p>
                        <input type="checkbox" />
                    </div>
                    <div className={Styles.set}>
                        <p>Restore password</p>
                    </div>
                    <div className={Styles.set}>
                        <p>Terms and conditional</p>
                    </div>
                </div>
                <div className={Styles.Situation}>
                    <h3>وضعیت</h3>
                    <div className={Styles.countparent}>
                        <div >
                            <p className={Styles.Statistics} >{all}</p>
                            <p className={Styles.count}>برنامه های امروز</p>
                        </div>
                        <div>
                            <p className={Styles.Statistics}>{plando}</p>
                            <p className={Styles.count}> انجام شده </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Setting;