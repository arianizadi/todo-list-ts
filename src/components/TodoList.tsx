import React from 'react'
import Todo from './Todo'
import { ITodoListProps } from '../types'

const TodoList = ({ todos, setTodos, filterdTodos }: ITodoListProps) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterdTodos.map((todo: any) => (
          <Todo
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
