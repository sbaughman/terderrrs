import React, { Component } from 'react'

export default class TodoInputter extends Component {
    constructor(props) {
        super(props)
        this.onTyping = this.onTyping.bind(this)
        this.onAddTodo = this.onAddTodo.bind(this)
        this.state = {
            todo: {}
        }
    }

    onTyping(e) {
        this.setState({ 
            todo: {
                completed: false,
                body: e.target.value
            }
        })
    }

    onAddTodo(e) {
        e.preventDefault()
        this.props.addTodo(this.state.todo)
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onAddTodo}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Inperrt terderrr"
                    onChange={this.onTyping}/>
                <div className="input-group-btn">
                    <button type="submit" className="btn btn-primary">Add terderrr</button>
                </div>
            </form>
        )
    }
}