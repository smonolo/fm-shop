import type { Faq } from '@/types/Faq'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { supabase } from '@/utils/supabase'
import type { RootDispatch } from '@/store'

type FaqsState = {
  faqs: Faq[]
  loading: boolean
  error: string | null
}

const initialState: FaqsState = {
  faqs: [],
  loading: false,
  error: null,
}

const faqsSlice = createSlice({
  name: 'faqs',
  initialState,
  reducers: {
    faqsLoading(state) {
      state.faqs = []
      state.loading = true
      state.error = null
    },
    faqsFailed(state, action: PayloadAction<string>) {
      state.faqs = []
      state.loading = false
      state.error = action.payload
    },
    faqsReceived(state, action: PayloadAction<Faq[]>) {
      state.faqs = action.payload
      state.loading = false
      state.error = null
    },
  },
})

const { faqsLoading, faqsFailed, faqsReceived } = faqsSlice.actions

export const loadFaqs = () => async (dispatch: RootDispatch) => {
  dispatch(faqsLoading())

  const { data, error } = await supabase
    .from('faqs')
    .select('*')
    .returns<Faq[]>()

  if (error) {
    dispatch(faqsFailed(error.message))
  } else {
    dispatch(faqsReceived(data))
  }
}

export default faqsSlice.reducer
