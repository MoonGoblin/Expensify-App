// This now shows a fully-baked redux example set up

import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
        type: 'INCREMENT',
        //incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
        incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

// Challenge: 
// Set up two more action generators

// setCount
const setCount = ({ count = 0} = {}) => ({
    type: 'SET',
    count
});

// resetCount
const resetCount = () => ({
    type: 'RESET'
});

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
        return {
            count: state.count - action.decrementBy
        }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
        return {
            count: 0
        }
        default: 
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));