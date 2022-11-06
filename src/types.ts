export interface ITodo {
  text: string
  completed: boolean
  id: number
}

export interface IFormProps {
  todos: ITodo[]
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
  inputText: string
  setInputText: React.Dispatch<React.SetStateAction<string>>
  setStatus: React.Dispatch<React.SetStateAction<string>>
}

export interface ITodoListProps {
  todos: ITodo[]
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
  filterdTodos: ITodo[]
}

export interface ITodoProps {
  text: string
  completed: boolean
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
  todos: ITodo[]
  todo: ITodo
}
