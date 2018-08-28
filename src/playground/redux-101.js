import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    if(action.type === 'INCREMENT') {
        return {
            count: state.count + 1 
        }
    } else {
    return state;
    }
});

console.log(store.getState());

// Actions

// increment, decrement, reset
store.dispatch({
    //type: 'INCREMENT_OTHER' // if you have a second word, you use underscore
    type: 'INCREMENT'
});

store.dispatch({
    type: 'INCREMENT'
});

// I'd like to reset the count
// I'd like to reset the count to zero

console.log(store.getState());