import React from "react";
import ReactDOM from "react-dom";
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

// Challenge
// addExpense -> Water bill
// addExpense -> Gas bill
const expenseOne = store.dispatch(addExpense({description: 'Water bill', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({description: 'Gas bill', amount: 300, createdAt: -1000 }));

// setTextFilter -> bill (2 items) -> water (1 item)
store.dispatch(setTextFilter('water'));

// getVisibleExpenses -> print visibles to screen
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);


ReactDOM.render(<AppRouter />, document.getElementById("app"));