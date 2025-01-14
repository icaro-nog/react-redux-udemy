import './Contador.css';
import React, { Component } from "react";

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    changePasso = (event) => {
        this.setState({
            // + para converter o valor recebido para um inteiro
            passo: +event.target.value
        })
    }

    render(){
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input 
                        type="number" 
                        name="passoInput" 
                        id="passoInput" 
                        value={this.state.passo}
                        onChange={this.changePasso}
                    />
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }

}

export default Contador;