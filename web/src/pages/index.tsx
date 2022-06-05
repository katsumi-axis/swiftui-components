import type { NextPage } from 'next'
import HomePage from '@/components/pages'
import CommonMeta from '@/utils/CommonMeta'

const Home: NextPage = () => {
    return (
        <>
            <CommonMeta />
            <HomePage />
        </>
    )
}

export default Home
