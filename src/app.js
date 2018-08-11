import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is my dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is my add expense component
    </div>
);

const EditExpensePage = () => (
    <div>
        This is my edit expense component
    </div>
);

const HelpPage = () => (
    <div>
        This is my help page component
    </div>
);

const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go Home</Link>
    </div>
);

// Challenge
// add a link that goes to home page in header.
// add a link to the create expense page
// add a link to the edit page
// add a link to the help page

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <Link to="/">Dashboard</Link>
        <Link to="/create">Create Expense</Link>
        <Link to="/edit">Edit Expense</Link>
        <Link to="/help">Help</Link>
    </header>
);

// Need div because header can't be out there on its own with BrowserRouter
const routes = (
    <BrowserRouter>
        <div> 
            <Header />
            <Switch> //stops when it finds a match
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>

        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));