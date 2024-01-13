import type { Product } from '@/types/product'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { supabase } from '@/utils/supabase'
import type { RootDispatch } from '@/store'

type ProductsState = {
  products: Product[]
  loading: boolean
  error: string | null
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productsLoading(state) {
      state.products = []
      state.loading = true
      state.error = null
    },
    productsFailed(state, action: PayloadAction<string>) {
      state.products = []
      state.loading = false
      state.error = action.payload
    },
    productsReceived(state, action: PayloadAction<Product[]>) {
      state.products = action.payload
      state.loading = false
      state.error = null
    },
  },
})

const { productsLoading, productsFailed, productsReceived } =
  productsSlice.actions

export const loadProducts = () => async (dispatch: RootDispatch) => {
  dispatch(productsLoading())

  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('releaseDate', { ascending: false })
    .returns<Product[]>()

  if (error) {
    dispatch(productsFailed(error.message))
  } else {
    dispatch(productsReceived(data))
  }
}

export default productsSlice.reducer
