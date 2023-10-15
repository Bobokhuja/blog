import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postSlice } from '@components/Posts/postSlice.ts'

export function makeStore() {
  return configureStore({
    reducer: {
      post: postSlice.reducer,
    }
  })
}

export const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

setupListeners(store.dispatch)