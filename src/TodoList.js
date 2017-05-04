import React from 'react'

import Todo from './Todo'

export default function TodoList(props) {
    const incompleteTodos = Object.keys(props.todos).filter((todoId) => !props.todos[todoId].completed).map(todoId => {
        return (<Todo key={todoId} todo={props.todos[todoId]} id={todoId} {...props} />)
    })
    const completedTodos = Object.keys(props.todos).filter((todoId) => props.todos[todoId].completed).map(todoId => {
        return (<Todo key={todoId} todo={props.todos[todoId]} id={todoId} {...props} />)
    })
    return (
        <div>
            <h3>Dis mah list of stuff ter derrr</h3>
            <ul className="list-group">
                {incompleteTodos}
            </ul>
            <h3>Recently completed terderrrs</h3>
            <ul className="list-group">
                {completedTodos}
            </ul>
        </div>
    )
}