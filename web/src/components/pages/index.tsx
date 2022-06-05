import Header from '@/components/ui/header'
import type { NextPage } from 'next'
import Logo from '@/assets/logo.svg'

const HomePage: NextPage = () => {
    return (
        <>
            <Header />

            <div className="container mx-auto">
                <div className="flex items-center flex-col py-12 px-4">
                    <Logo className="h-14 w-14 m-3" />
                    <h3 className="text-base font-bold">SwiftUI Components</h3>
                    <div className="pb-5 text-center"> A repository of free components built with SwiftUI</div>
                    <a className="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-">
                        Browes Components »
                    </a>
                </div>
            </div>
        </>
    )
}

export default HomePage
