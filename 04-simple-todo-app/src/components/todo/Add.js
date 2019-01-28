import React, { Component} from 'react'
import { addTodo } from '../../actions'
import {connect} from 'react-redux'


function mapDispatchToProps (dispatch){
    return {
        addTodo: text => dispatch(addTodo(text))
    }
};

class AddTodoForm extends Component{

    constructor(){
        super();
        this.state = {
            text: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event, dispatch) =>{
        event.preventDefault();
        const {text} = this.state
        if(text){
            this.props.addTodo(text)
            this.setState({text: ""})
        }
    }

    handleChange = event =>{
        this.setState({ [event.target.name]: event.target.value })
    }

    render () {
        const { text} = this.state

        return (
            <div className="col-md-12">
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="text"> Task </label>
                        <input
                            className="form-control"
                            type='text'
                            value={text}
                            onChange={this.handleChange}
                            name='text'
                            placeholder="Enter a task here"
                            id='text'
                        />
                    </div>
                    <center>
                        <button className="btn btn-primary btn-lg"> Add Task</button>
                    </center>
                </form>
            </div>
        )
    }
}

const Form =  connect(null, mapDispatchToProps)(AddTodoForm);
export default Form;