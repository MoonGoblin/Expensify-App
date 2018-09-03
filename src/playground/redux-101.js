import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
        type: 'INCREMENT',
        incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count = 0} = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
// 1. Reducers are "pure" functions (what it returns comes from only 
//    the things passed in.) A non-pure function is in some way 
//    dependent on things other than what is passed into the function, 
//    such as a global variable. Reducers need to computer the new state
//    based on only the old state and the action. It shouldn't interact 
//    with things outside its scope.
// 2. We want to never directly change state or action. Instead we 
//    read off them and return and object that gives a new state


const countReducer = (state = { count: 0 }, action) => {
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
}


// This function is called a REDUCER - a core concept - see Redux documentation
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));