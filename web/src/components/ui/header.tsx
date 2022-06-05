import Logo from '@/assets/logo.svg'
import { pagesPath } from '@/utils/$path'
import Link from 'next/link'

const Header = () => {
    return (
        <>
            <div className="border-scale-400 border-b">
                <div className="container mx-auto">
                    <div className="flex flex-1 items-center justify-center md:justify-between">
                        <Link href={pagesPath.$url()}>
                            <a className="text-base font-bold flex items-center">
                                <Logo className="h-8 w-8 m-3" />
                                <div className="">SwiftUI Components </div>
                            </a>
                        </Link>

                        <div className="hidden md:flex">
                            <div className="text-sm px-2">
                            <Link
                                    href={
                                        'https://github.com/katsumi-axis/swiftui-components/'
                                    }
                                >
                                    <a>Star us on GitHub</a>
                                </Link>
                            </div>
                            <div className="text-sm px-2">
                                <Link
                                    href={
                                        'https://github.com/katsumi-axis/swiftui-components/graphs/contributors'
                                    }
                                >
                                    <a>Contributor</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
