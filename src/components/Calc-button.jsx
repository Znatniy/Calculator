import React from 'react';
import './Calc-button.css';

const isOperator = val => {
    return !isNaN(val) || val === "." || val === "="};

export const CalcButton = props => <div className={`button-box ${
    isOperator(props.children) ? null : "operator"
}`}
                                        onClick={() => props.handleClick(props.children)}
>{props.children} </div>;
