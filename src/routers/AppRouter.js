import React from "react";
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Challenge
// Create 6 new files for 6 components
// setup imports, component, default export
// import into AppRouter so that they can be used

const AppRouter = () => (
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

export default AppRouter;