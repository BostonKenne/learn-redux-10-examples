import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state =>{
    return { todos: state.todos };
}


const ConnnectTodoList = ({todos}) =>(
    <div className="col-md-12">
        <ul className="list-group list-group-flush">
        {
            todos.map(todo=>(
                <li className="list-group-item" key={todo.id} > { todo.text } <span style={{float: "right", color: "red", cursor: "pointer"}} >x</span> </li>
            ))
        }
        </ul>
    </div>
)


const TodoList =  connect(mapStateToProps)(ConnnectTodoList)

export default TodoList;