import React from 'react';

import Single from './Single';

// stateful component needs a class with a render method
// stateless component needs a function which will then be returned 
class Grid extends React.Component {
    renderItems(){
        return this.props.notes.map(item => 
        <Single
            key = {item.id}
            note = {item}
        /> 
        );
    }

    render(){
        return(
            <div className="row">
                <ul>
                    {this.renderItems()}    
                </ul>
            </div>
        )
    }
}

export default Grid;