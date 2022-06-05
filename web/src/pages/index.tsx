import type { NextPage } from 'next'
import HomePage from '@/components/pages'
import CommonMeta from '@/utils/CommonMeta'
import Head from 'next/head'

const Home: NextPage = () => {
    return (
        <>
            <Head><meta name="google-site-verification" content="J26VwaLt7zFMMB0EuDrg_in-dxunfjdODoJHL036IVk" /></Head>
            <CommonMeta />
            <HomePage />
        </>
    )
}

export default Home
