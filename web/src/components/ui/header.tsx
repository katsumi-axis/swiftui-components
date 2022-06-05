import Logo from "@/assets/logo.svg"

const Header = () => {
    return(<>
        <div className="border-scale-400 border-b backdrop-blur-sm">
            <div className="container mx-auto">
                <div className='flex flex-1 items-center justify-between'>
                    <div className="text-base font-bold flex items-center">
                        <Logo className="h-8 w-8 m-3"/>
                        <div className="">SwiftUI Components </div>
                    </div>
                

                    <div className="text-sm">
                        Star us on GitHub
                    </div>

                </div>
            </div>
        </div>
    </>)
}

export default Header