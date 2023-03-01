import { configureStore } from "@reduxjs/toolkit"
import callsReducer from "./features/calls/slice"
import filterReducer from "./features/filters/slice"

export const store = configureStore({
	reducer: {
		calls: callsReducer,
		filters: filterReducer,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
