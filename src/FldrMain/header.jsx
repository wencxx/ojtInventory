import { PanelRightClose } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useLocation } from 'react-router-dom'

function Header({ setShowMobileSidebar }) {
    const location = useLocation()
    return ( 
        <header className="bg-white shadow w-full h-[7dvh] flex justify-between items-center px-5">
            <div className="flex gap-x-3 items-center">
                <PanelRightClose className="lg:hidden" onClick={() => setShowMobileSidebar(true)} />
                <h1 className="capitalize">{location.pathname.length > 1 ? location.pathname.slice(1) : 'dashboard'}</h1>
            </div>
            <span className="flex gap-x-2 items-center">
                Admin
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>WB</AvatarFallback>
                </Avatar>
            </span>
        </header>
     );
}

export default Header;