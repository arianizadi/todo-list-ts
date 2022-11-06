import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'
import { ITodo } from './types'

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState<ITodo[]>([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState<ITodo[]>([])

  useEffect(() => {
    // Get from local
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos') || '')
      console.log(todoLocal)
      setTodos(todoLocal)
    }
  }, [])

  useEffect(() => {
    // Filter
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo: ITodo) => todo.completed === true))
        break
      case 'uncompleted':
        setFilteredTodos(
          todos.filter((todo: ITodo) => todo.completed === false),
        )
        break
      default:
        setFilteredTodos(todos)
        break
    }

    // Save to local
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos, status])

  return (
    <div className="App">
      <header>
        <h1>Arian's Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus}
      ></Form>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filterdTodos={filteredTodos}
      ></TodoList>
    </div>
  )
}

export default App
