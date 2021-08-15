import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { v4 } from 'uuid'

interface ToDoState {
    title: string,
    text: string,
    id: string
}

interface ToDoListState {
    elems: ToDoState[],
    inputTitle: string,
    inputText: string,
    inputId: string
}

const initialState: ToDoListState = {
    elems: [{title: "test", text:"text",id: ""}],
    inputTitle: "",
    inputText: "",
    inputId: v4()

}

export const toDoSlice = createSlice ({
    name: "toDo",

    initialState,

    reducers: {
        setAll: (state, action: PayloadAction<ToDoState> ) => {
            state.elems = state.elems.concat(action.payload)
        },
        setTitle: (state, action: PayloadAction<string>) => {
            state.inputTitle = action.payload
        },
        setText: (state, action: PayloadAction<string>) => {
            state.inputText = action.payload
        },
        setId: (state, action: PayloadAction<string>) => {
            state.inputId = action.payload
        },
        deletePost: (state, action: PayloadAction<string>) => {
            state.elems = state.elems.filter(x => x.id !== action.payload)
        }
    }
})

export const { setText, setTitle, setId, setAll, deletePost } = toDoSlice.actions

export const selectToDo = (state: RootState) => state.toDo