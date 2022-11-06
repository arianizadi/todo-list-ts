import React from 'react'
import { ITodoProps } from '../types'

const Todo = ({ text, todo, todos, setTodos }: ITodoProps) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el: any) => el.id !== todo.id))
  }
  const completeHandler = () => {
    setTodos(
      todos.map((item: any) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          }
        }
        return item
      }),
    )
  }
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default Todo
