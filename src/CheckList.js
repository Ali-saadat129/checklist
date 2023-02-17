import React from 'react';

// style
import Style from "./style/Checklist.module.css"

// components
import Main from "./components/Main"

const CheckList = () => {
    return (
        <div className={Style.container}>
            <Main />
        </div>
    );
};

export default CheckList;