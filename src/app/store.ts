import { configureStore } from '@reduxjs/toolkit'
import { couterSlice } from '../components/counter/counterSlice'
import { toDoSlice } from '../components/toDo/toDoSlice'
// ...

export const store = configureStore({
  reducer: {
    counter: couterSlice.reducer,
    toDo: toDoSlice.reducer
  },
  
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch