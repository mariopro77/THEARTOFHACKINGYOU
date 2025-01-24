export default function Navbar() {

    return( 
        <nav className="h-12 bg-orange-200  shadow-md flex justify-center fixed top-0 w-full">
            <div className="flex flex-row justify-between w-full items-center h-full container max-w-sm sm:mx-auto xl:max-w-6xl">
                <div><h1 className="font-bold text-2xl">FreeBook</h1></div>
                <div><p className="text-md">Need help?</p></div>
            </div>
        </nav>  
    )
 }