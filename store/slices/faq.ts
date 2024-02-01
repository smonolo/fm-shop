import type { FAQ } from '@/types/faq'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { supabase } from '@/utils/supabase'
import type { RootDispatch } from '@/store'

type FaqsState = {
  faq: FAQ[]
  loading: boolean
  error: string | null
}

const initialState: FaqsState = {
  faq: [],
  loading: false,
  error: null,
}

const faqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {
    faqLoading(state) {
      state.faq = []
      state.loading = true
      state.error = null
    },
    faqFailed(state, action: PayloadAction<string>) {
      state.faq = []
      state.loading = false
      state.error = action.payload
    },
    faqReceived(state, action: PayloadAction<FAQ[]>) {
      state.faq = action.payload
      state.loading = false
      state.error = null
    },
  },
})

const { faqLoading, faqFailed, faqReceived } = faqSlice.actions

export const loadFAQ = () => async (dispatch: RootDispatch) => {
  dispatch(faqLoading())

  const { data, error } = await supabase
    .from('faq')
    .select('*')
    .returns<FAQ[]>()

  if (error) {
    dispatch(faqFailed(error.message))
  } else {
    dispatch(faqReceived(data))
  }
}

export default faqSlice.reducer
