import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import * as firebase from 'firebase'
import config from './firebase-config'


const fb = firebase.initializeApp(config).database().ref()

const addTodo = (todo) => fb.child('todos').push(todo)
const updateTodo = (id, todo) => fb.child(`todos/${id}`).update(todo)
const deleteTodo = (id, todo) => fb.child(`todos/${id}`).remove()

const actions = {
  addTodo,
  updateTodo,
  deleteTodo
}

fb.on('value', snapshot => {
  const store = snapshot.val()
  ReactDOM.render(
    <App 
      {...store}
      {...actions}
    />,
    document.getElementById('root')
  )
})

