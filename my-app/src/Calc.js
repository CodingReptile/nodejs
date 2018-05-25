import React from 'react';
import './Calc.css';

class Calc extends React.Component
{
    state = {
        displayValue : '0'
    }

    inputDigit(digit)
    {
        this.setState({
            displayValue : this.state.displayValue === '0' ? String(digit) : this.state.displayValue + String(digit)
        });
    }

    clear()
    {
        this.setState({
            displayValue : '0'
        });        
    }

    render()
    {
        return (
            <div className="Calculator">
                <div className="CalculatorHeader">
                    <div className="DebugDisplay">
                        {JSON.stringify(this.state)}
                    </div>
                    <div className="CalculatorDisplay">{this.state.displayValue}</div>
                </div>
                <div className="CalculatorBody">
                    <button className="Button" onClick={() => this.inputDigit(7)}>7</button>
                    <button className="Button" onClick={() => this.inputDigit(8)}>8</button>
                    <button className="Button" onClick={() => this.inputDigit(9)}>9</button>
                    <button className="Button" onClick={() => this.inputDigit(9)}>x</button>
                    <button className="Button" onClick={() => this.inputDigit(4)}>4</button>
                    <button className="Button" onClick={() => this.inputDigit(5)}>5</button>
                    <button className="Button" onClick={() => this.inputDigit(6)}>6</button>
                    <button className="Button" onClick={() => this.inputDigit(9)}>-</button>
                    <button className="Button" onClick={() => this.inputDigit(1)}>1</button>
                    <button className="Button" onClick={() => this.inputDigit(2)}>2</button>
                    <button className="Button" onClick={() => this.inputDigit(3)}>3</button>
                    <button className="Button" onClick={() => this.inputDigit(3)}>+</button>
                    <button className="Button" onClick={() => this.clear()}>C</button>
                    <button className="Button" onClick={() => this.inputDigit(0)}>0</button>
                    <button className="Button" onClick={() => this.inputDigit('.')}>.</button>
                    <button className="Button" onClick={() => this.inputDigit(3)}>=</button>
                </div>
            </div>
        ); 
    }
}

export default Calc;