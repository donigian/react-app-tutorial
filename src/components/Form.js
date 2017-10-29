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
            <form onSubmit={this.props.handleSubmit} className="col s12">
                <div classNam="row">
                    <div className="input-field col s3">
                        <input 
                            name = "currentTitle"
                            type = "text"
                            value = {this.props.currentTitle}
                            onChange = {this.props.handleChange}/>
                    </div>
                    <div className="input-field col s7">
                        <input 
                            name = "currentDetails"
                            type = "text"
                            value = {this.props.currentTitle}
                            onChange = {this.props.handleChange}/>
                    </div> 
                    <div className="input-field col s2">
                        <button className="btn-large waves-effects waves-light"
                            type="submit" name="action"> Add Note</button>
                    </div>
                </div>

            </form>
        );
    }
}

export default Form;