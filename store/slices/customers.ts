import type { Customer } from '@/types/customer'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { supabase } from '@/utils/supabase'
import type { RootDispatch } from '@/store'

type CustomersState = {
  customers: Customer[]
  loading: boolean
  error: string | null
}

const initialState: CustomersState = {
  customers: [],
  loading: false,
  error: null,
}

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    customersLoading(state) {
      state.customers = []
      state.loading = true
      state.error = null
    },
    customersFailed(state, action: PayloadAction<string>) {
      state.customers = []
      state.loading = false
      state.error = action.payload
    },
    customersReceived(state, action: PayloadAction<Customer[]>) {
      state.customers = action.payload
      state.loading = false
      state.error = null
    },
  },
})

const { customersLoading, customersFailed, customersReceived } =
  customersSlice.actions

export const loadCustomers = () => async (dispatch: RootDispatch) => {
  dispatch(customersLoading())

  const { data, error } = await supabase
    .from('customers')
    .select('*')
    .order('createdAt', { ascending: false })
    .returns<Customer[]>()

  if (error) {
    dispatch(customersFailed(error.message))
  } else {
    dispatch(customersReceived(data))
  }
}

export default customersSlice.reducer
