import React, { Component } from "react";
import './Calculator.css';

import Button from '../components/Button';
import Display from "../components/Display";

class Calculator extends Component {

    clearMemory(){
        console.log('limpar')
    }

    setOperation(operation){
        console.log(operation)
    }

    addDigit(n){
        console.log(n)
    }

    render() {

        const addDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)

        return (
            <div className="calculator">
                <Display
                    value={1000}
                ></Display>
                <Button
                    label="AC"
                    click={() => this.clearMemory()}
                ></Button>
                <Button
                    label="/"
                    click={setOperation}
                ></Button>
                <Button
                    label="7"
                    click={addDigit}
                ></Button>
                <Button
                    label="8"
                    click={addDigit}
                ></Button>
                <Button
                    label="9"
                    click={addDigit}
                ></Button>
                <Button
                    label="*"
                    click={setOperation}
                ></Button>
                <Button
                    label="4"
                    click={addDigit}
                ></Button>
                <Button
                    label="5"
                    click={addDigit}
                ></Button>
                <Button
                    label="6"
                    click={addDigit}
                ></Button>
                <Button
                    label="-"
                    click={setOperation}
                ></Button>
                <Button
                    label="1"
                    click={addDigit}
                ></Button>
                <Button
                    label="2"
                    click={addDigit}
                ></Button>
                <Button
                    label="3"
                    click={addDigit}
                ></Button>
                <Button
                    label="+"
                    click={setOperation}
                ></Button>
                <Button
                    label="0"
                    click={addDigit}
                ></Button>
                <Button
                    label="."
                    click={setOperation}
                ></Button>
                <Button
                    label="="
                    click={setOperation}
                ></Button>
            </div>
        )
    }
}

export default Calculator;