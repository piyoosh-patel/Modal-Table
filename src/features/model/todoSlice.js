import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{
        id: "",
        firstName: " ",
        lastName: " ",
        email: " ",
        address: " ",
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                address: action.payload.address
            }
            console.log("payload ====>" ,action.payload)
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        updateTodo: (state, action) => {
            
            const { id , firstName , lastName ,email , address } = action.payload;
            const todoToUpdate = state.todos.find(todo => todo.id === id);
            if (todoToUpdate) {
             todoToUpdate.firstName = firstName;
             todoToUpdate.lastName = lastName;
             todoToUpdate.email = email;
             todoToUpdate.address = address;
            }
          },
    }
})

export const {addTodo ,removeTodo ,updateTodo} =todoSlice.actions

export default todoSlice.reducer