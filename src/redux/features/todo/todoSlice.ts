// src/redux/store.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Redux app', completed: false },
];

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: state.length + 1,
                text: action.payload,
                completed: false,
            };
            state.push(newTodo);
        },
        toggleTodo: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
    },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;