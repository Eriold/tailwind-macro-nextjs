import { cache } from '@emotion/css'
import { CacheProvider } from '@emotion/react'
import type { AppProps } from 'next/app'
import GlobalStyles from './../styles/GlobalStyles'
import 'antd/dist/antd.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <CacheProvider value={cache}>
    <GlobalStyles />
    <Component {...pageProps} />
  </CacheProvider>
}

export default MyApp
