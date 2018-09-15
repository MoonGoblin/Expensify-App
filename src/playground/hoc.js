// Higher Order Component (HOC) - A component (HOC) that renders another component (regurlar)
// Reuse code
// Render hijacking
// Prop manipulation
// Astract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

// Our first HOC

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>} // This is an HOC
            <WrappedComponent {...props} />
        </div>
    );
};

// Challenge
// requireAuthentication
// Please login to view the info

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />                
            ) : (
                <p>Please login to view the info!</p> // This is an HOC
            )}
        </div>
    );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.getElementById('app'));