import React from 'react';

// stateless component, doesn't need this reference to props
const Header = (props) => {
    return (
        <div className="App-header">
            <h1> {props.name}'s Notepad</h1>
        </div>
    );
}

export default Header;