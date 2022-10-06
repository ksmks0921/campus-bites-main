import getTodos from './get-todos.js'
import getTodo from './get-todo.js'
import createTodo from './create-todo.js'
import updateTodo from './update-todos.js'
import deleteTodo from './delete-todo.js'

const todoPaths = {
    paths:{
        '/api/todos':{
            ...getTodos,
            ...createTodo
        },
        '/todos/{id}':{
            ...getTodo,
            ...updateTodo,
            ...deleteTodo
        }
    }
}

export default todoPaths;