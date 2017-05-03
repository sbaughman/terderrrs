import React from 'react'

import Todo from './Todo'

export default function TodoList(props) {
    const todos = Object.keys(props.todos).map((todoId, index) => {
        return (<Todo key={index} todo={props.todos[todoId]} id={todoId} {...props}/>)
    })
    return (
        <div>
            <h2>Dis mah list of stuff ter derrr</h2>
            <ul className="list-group">
                {todos}
            </ul>
        </div>
    )
}