import React from 'react';
import './Calc-clear.css';

export const CalcClear = (props) => (
    <div className="clr" onClick={props.handleClear}>{props.children}</div>
);