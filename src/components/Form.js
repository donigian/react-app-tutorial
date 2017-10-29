import React from 'react';

// stateful component needs a class with a render method
// stateless component needs a function which will then be returned 
class Form extends React.Component {
    handleChange(event){
        this.props.handleChange(event);
    }

    handleSubmit(event){
        this.props.handleSubmit(event);
    }

    render(){
        return(
            <form onSubmit={this.props.handleSubmit}>
                <label>Title: 
                    <input 
                        name = "currentTitle"
                        type = "text"
                        value = {this.props.currentTitle}
                        onChange = {this.props.handleChange}
                    />
                </label>
                <textarea 
                    name = "currentDetails"
                    value = {this.props.currentDetails}
                    onChange = {this.props.handleChange}
                />
                <div>
                    <input type = "submit" value = "Add note" />
                </div>
            </form>
        );
    }
}

export default Form;