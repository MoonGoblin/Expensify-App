import { createStore, combineReducers } from 'redux';

// Lots of possible actions:
// Its not feasible to do these with
// a single reducerer
// But we can use a single reducer for each
// root property in our redux store.

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
        return state;
    }
};

// Filters Reducer
// text => empty string, sortBy => date, startDate => undefined, endDate => undefined
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined   
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }    
};


// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter: filtersReducer
    })
);

console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'blahblah',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500, // just tracking in pennies
        createdAt: 0
    }],

    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};