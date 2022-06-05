import type { NextPage } from 'next'
import HomePage from '@/components/pages'
import Head from 'next/head'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>SwiftUI Component</title>
            </Head>
            <HomePage />
        </>
    )
}

export default Home
