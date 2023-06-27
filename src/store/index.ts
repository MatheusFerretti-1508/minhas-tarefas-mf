import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {}
})

type RootReducer = ReturnType<typeof store.getState>
