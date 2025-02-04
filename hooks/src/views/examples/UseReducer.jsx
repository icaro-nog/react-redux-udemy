import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0,
    productNumber: 10
}

function reducer(state, action) {
    switch(action.type){
        case 'numberAdd2':
            return {...state, number: state.number + 2}
        case 'login':
            return {...state, user: { name: action.payload } }
        case 'multiplicaDivide':
            return {...state, productNumber: state.productNumber * 7 / 25}
        case 'tonarInteiro':
            return {...state, productNumber: parseInt(state.productNumber)}
        case 'passarN':
            return {...state, productNumber: state.productNumber + action.payload}
        default:
            return state
    }
}

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ? 
                    <span className="text">{state.user.name}</span> 
                    : <span className="text">Sem Usuário</span>
                }
                <span className="text">
                    {state.number}
                </span>
                <div>
                    <button 
                        className="btn"
                        onClick={() => dispatch({ type: 'login', payload: 'Maria' })}
                    >Login</button>
                    <button 
                        className="btn"
                        onClick={() => dispatch({type: 'numberAdd2'})}
                    >+2</button>
                </div>
            </div>

            <div className="center">
                <span className="text">
                    {state.productNumber}
                </span>
                <div>
                    <button 
                        className="btn"
                        onClick={() => dispatch({ type: 'multiplicaDivide' })}
                    >Multiplicar e Dividir</button>
                    <button 
                        className="btn"
                        onClick={() => dispatch({type: 'tonarInteiro' })}
                    >Tornar inteiro</button>
                    <button 
                        className="btn"
                        onClick={() => dispatch({type: 'passarN', payload: 25 })}
                    >Somar número</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
