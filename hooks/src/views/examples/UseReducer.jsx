import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store'

import { numberAdd2, login } from '../../store/actions'

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
                        onClick={() => login(dispatch, 'Ícaro')}
                    >Login</button>
                    <button 
                        className="btn"
                        onClick={() => numberAdd2(dispatch)}
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
