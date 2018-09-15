import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// google react-redux and you will get the GitHub repository
// which is actually pretty small

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

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
type: 'EDIT_EXPENSE',
id,
updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'Date'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'Amount'
});

// SET_START_DATE
const setStartDate = (date = 'undefined') => ({
    type: 'SET_START_DATE',
    startDate: date
});

// SET_END_DATE
const setEndDate = (date = 'undefined') => ({
    type: 'SET_END_DATE',
    endDate: date
});


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
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                };
            });
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
        case 'SET_TEXT_FILTER':
        return {
            ...state,
            text: action.text
        };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }    
};


// Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        // Challenge Above
        // figure out if expenses.description as the text variable string inside of it
        // includes method (one string includes another) google javascript includes - string version
        // convert both strings to lower case

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    }); // google "mdn array sort" to find out how sort works for arrays
};

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

// Dispatching actions
const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

//store.dispatch(setTextFilter('ffe'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0)); // change start date to 125
// store.dispatch(setStartDate()); // should set = to undefined
// store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate(999));

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

// Demonstrating spreading objects
// const user = {
//     name: 'Jen',
//     age: 24
// };

// console.log({
//    ...user,
//    location: 'Philadelphia',
//    age: 27
// });