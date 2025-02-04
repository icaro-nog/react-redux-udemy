export function reducer(state, action) {
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