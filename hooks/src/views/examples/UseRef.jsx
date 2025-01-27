import React, { useState, useRef, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = (v1, v2) => {
    return v1 + v2;

    // const mergedValue = '';
    // const 

    // // var testVariable = 10;
    // // var oldVar = testVariable;

    // // ...
    // // if (oldVar != testVariable)
    // // alert("testVariable has changed!");

    // if(){

    // }

}

const UseRef = (props) => {

    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const count = useRef(0)

    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(function() {
        count.current = count.current + 1
        myInput2.current.focus()
    }, [value1])

    useEffect(function() {
        count.current = count.current + 1
        myInput1.current.focus()
    }, [value2])


    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle
                title='Execício #01'
            ></SectionTitle>
            <div
                className='center'
            >
                <div>

                    <span
                        className='text'
                    >
                        Valor:
                    </span>
                    <span
                        className='text'
                    >
                        {merge(value1, value2)} [
                    </span>
                    <span
                        className='text red'
                    >
                        {count.current}
                    </span>
                    <span
                        className='text'
                    >
                        ]
                    </span>
                </div>
                <input 
                    type="text" 
                    className='input'
                    value={value1}
                    onChange={e => setValue1(e.target.value)}
                    ref={myInput1}
                />
            </div>

            <SectionTitle
                title='Execício #02'
            ></SectionTitle>
            <div 
                className='center'
            >
                <input 
                    type="text" 
                    className='input'
                    value={value2}
                    onChange={e => setValue2(e.target.value)}
                    ref={myInput2}
                />
            </div>

        </div>
    )
}

export default UseRef
