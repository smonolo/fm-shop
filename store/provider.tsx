'use client'

import type { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import store from '@/store'

type Props = PropsWithChildren<{}>

const StoreProvider: FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
