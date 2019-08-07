import React, { Component} from 'react';
import './App.css';
import { CalcButton } from './components/Calc-button';
import { CalcInput } from './components/Calc-input';
import { CalcClear } from './components/Calc-clear';
import * as math from 'mathjs';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            input: "",
        };
    }

    add = val => {
        this.setState({input: this.state.input + val})
    };

    handleResult = () => {
        this.setState({ input: math.evaluate(this.state.input) });
    };

    render() {
        return (
            <div className="application">
                <div className="calculator">
                    <div className="about">Calculator by Mosejko Dmitrij</div>
                    <CalcInput input={this.state.input} />
                    <div className="box">
                    <div className="calc-row">
                        <CalcButton handleClick={this.add}>1</CalcButton>
                        <CalcButton handleClick={this.add}>2</CalcButton>
                        <CalcButton handleClick={this.add}>3</CalcButton>
                        <CalcButton handleClick={this.add}>/</CalcButton>
                    </div>
                    <div className="calc-row">
                        <CalcButton handleClick={this.add}>4</CalcButton>
                        <CalcButton handleClick={this.add}>5</CalcButton>
                        <CalcButton handleClick={this.add}>6</CalcButton>
                        <CalcButton handleClick={this.add}>*</CalcButton>
                    </div>
                    <div className="calc-row">
                        <CalcButton handleClick={this.add}>7</CalcButton>
                        <CalcButton handleClick={this.add}>8</CalcButton>
                        <CalcButton handleClick={this.add}>9</CalcButton>
                        <CalcButton handleClick={this.add}>+</CalcButton>
                    </div>
                    <div className="calc-row">
                        <CalcButton handleClick={this.add}>.</CalcButton>
                        <CalcButton handleClick={this.add}>0</CalcButton>
                        <CalcButton handleClick={() => this.handleResult()}>=</CalcButton>
                        <CalcButton handleClick={this.add}>-</CalcButton>
                    </div>
                    <div className="calc-row">
                        <CalcClear handleClear={() => this.setState({ input: "" })}>Clear</CalcClear>
                    </div>
                    </div>
                </div>
            </div>
    );
   }
}

export default App;
