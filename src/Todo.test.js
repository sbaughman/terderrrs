import Todo from './Todo'
import React from 'react'
import { mount } from 'enzyme'
import { actions } from './App.test'

const todo = { completed: false, body: 'test body'}
const id = 1

test('Todo component renders the text of the todo', () => {
    const wrapper = mount(
        <Todo todo={todo} id={id} />
    )
    const body = wrapper.find('.todo-body')
    expect(body.text()).toBe('test body')
})

test('Todo component calls updateTodo with id and updated todo when complete button is clicked', () => {
    const updateTodo = jest.fn()
    const wrapper = mount(
        <Todo todo={todo} id={id} updateTodo={updateTodo} />
    )
    const completeButton = wrapper.find('.toggle-complete')
    completeButton.simulate('click')
    expect(updateTodo).toBeCalledWith(1, {body: "test body", completed: true})
    completeButton.simulate('click')
    expect(updateTodo).toBeCalledWith(1, {body: "test body", completed: false})
})

test('Todo component calls deleteTodo with id and todo when delete button is clicked', () => {
    const deleteTodo = jest.fn()
    const wrapper = mount(
        <Todo todo={todo} id={id} deleteTodo={deleteTodo} />
    )
    const deleteButton = wrapper.find('.delete-todo')
    deleteButton.simulate('click')
    expect(deleteTodo).toBeCalledWith(1, todo)
})

test('Todo component toggles the edit form when edit todo button is clicked', () => {
    const wrapper = mount(
        <Todo todo={todo} id={id} />
    )
    let editForm = wrapper.find('input.todo-body')
    const editButton = wrapper.find('.edit-todo')
    expect(editForm.node).toBeFalsy()
    editButton.simulate('click')
    editForm = wrapper.find('input.todo-body')
    expect(editForm.node).toBeTruthy()
})