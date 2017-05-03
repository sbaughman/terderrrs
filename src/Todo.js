import React, { Component } from 'react'

import styles from './Todo.css'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.toggleComplete = this.toggleComplete.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.editTodo = this.editTodo.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
        this.state = {
            editing: false,
            todo: props.todo
        }
    }

    toggleComplete() {
        this.setState(
        {
            todo: {
                body: this.state.todo.body,
                completed: !this.state.todo.completed
            }
        }, this.updateTodo)
    }

    deleteTodo() {
        this.props.deleteTodo(this.props.id, this.state.todo)
    }

    editTodo() {
        this.setState({editing: true})
    }

    updateTodo() {
        this.setState({editing: false})
        this.props.updateTodo(this.props.id, this.state.todo)
    }

    handleChange(e) {
        this.setState({
            todo: {
                body: e.target.value,
                completed: this.state.todo.completed
            }
        })
    }

    render() {
        let todoBody = null;
        if (this.state.editing) {
            todoBody = <input autoFocus className="todo-body" value={this.state.todo.body} onChange={this.handleChange} onBlur={this.updateTodo}/>
        } else {
            todoBody = <span className="todo-body">{this.state.todo.body}</span>
        }

        return (
            <li style={styles['todo-item']} className="list-group-item">
                {todoBody}
                <div className="btn-group pull-right">
                    <button className="btn btn-success toggle-complete" onClick={this.toggleComplete}>
                        <span className={this.state.todo.completed ? 'glyphicon glyphicon-remove' : 'glyphicon glyphicon-ok'}></span>
                    </button>
                    <button className="btn btn-warning edit-todo" onClick={this.editTodo}>
                        <span className="glyphicon glyphicon-pencil"></span>
                    </button>
                    <button className="btn btn-danger delete-todo" onClick={this.deleteTodo}>
                        <span className="glyphicon glyphicon-trash"></span>
                    </button>
                </div>
            </li>
        )
    }
}