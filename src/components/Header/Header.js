import React from 'react';
import {withRouter} from 'react-router-dom';

import './Header.sass';

function Header({backward = true, match, todosValueTotal, todosValueCompleted}) {       
    const arrowBack = backward ? <ArrowBack/> : null;
    const textStyle = backward ? {transform: 'translate(10px)'} : {};
    let pageName = match.params.filter;

    if (pageName) {
        pageName = pageName[0].toUpperCase() + pageName.slice(1);
    } else {
        pageName = 'Tasks';
    }

    const completedPercent = todosValueTotal 
        ? Math.floor(todosValueCompleted / todosValueTotal * 100)
        : 0
    ; 

    const completedCircle = 160 - 160 * completedPercent / 100; // 440 - (440 * 5%) / 100

    const style = {
        strokeDashoffset: completedCircle
    }


    return (
        <div className="nav">
            {arrowBack}
            <h1 className="nav__title" style={textStyle}>{pageName}</h1>
            <div className="nav__progress">
                <svg height="60" width="60">
                    <linearGradient id="nav__progress-line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgb(114, 15, 212)"></stop>
                        <stop offset="100%" stopColor="rgb(215, 102, 255)"></stop>
                    </linearGradient>

                    <circle className="nav__progress-track" cx="30" cy="30" r="25"></circle>
                    <circle className="nav__progress-line" cx="30" cy="30" r="25" stroke="url(#nav__progress-line-gradient)" style={style}></circle>
                </svg>
                
                <p className="nav__progress-percent">{completedPercent}%</p>
            </div>
        </div>  
    );
};

function ArrowBack() {
    return (
        <button onClick={onBack} className="btn">
            <i className="fa fa-arrow-left ico ico_btn"></i>
        </button>
    )
}

function onBack() {
    window.history.back();
}

export default withRouter(Header);