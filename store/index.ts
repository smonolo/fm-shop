import { combineReducers, configureStore } from '@reduxjs/toolkit'
import products from '@/store/slices/products'
import customers from '@/store/slices/customers'

const store = configureStore({
  reducer: combineReducers({ products, customers }),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootStore = typeof store
export type RootDispatch = RootStore['dispatch']
export type RootState = ReturnType<RootStore['getState']>

export default store
