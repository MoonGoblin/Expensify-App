import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Lots of possible actions:
// Its not feasible to do these with
// a single reducerer
// But we can use a single reducer for each
// root property in our redux store.

// ADD_EXPENSE
const addExpense = ({
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        // using npm uuid library for this
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});


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
        case 'ADD_EXPENSE':
            //return state.concat(action.expense);
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
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

store.subscribe(() => {
    console.log(store.getState());
});

// Dispatching actions
const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300 }));

store.dispatch(removeExpense({id: expenseOne.expense.id }));

console.log(expenseOne);

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