import { createStore } from 'redux';

const inicialState = {counterValue: 0};
const reducer = (state = inicialState, {payload, type}) => {
    switch (type) {
        case 'counter/increment':
            return { counterValue: state.counterValue + payload, };
        
        case 'counter/dicrement':
            return { counterValue: state.counterValue - payload, };

        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;