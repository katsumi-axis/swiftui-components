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
                            <div className="text-sm px-2">Star us on GitHub</div>
                            <div className="text-sm px-2">Contributor</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
