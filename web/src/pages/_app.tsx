import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { ReactElement, ReactNode } from 'react'

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
    const getLayout = Component.getLayout ?? ((page) => page)

    return getLayout(
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
                />
                <title>SwiftUI Components</title>
            </Head>
            <Component {...pageProps} className={'bg-gray-50'} />
        </>
    )
}

export default App
