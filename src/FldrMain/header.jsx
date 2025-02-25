import { Menu } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function Header({ setShowMobileSidebar }) {
    return ( 
        <header className="bg-white shadow w-full h-[7dvh] flex justify-between items-center px-5">
            <div className="flex gap-x-3 items-center">
                <Menu className="lg:hidden" onClick={() => setShowMobileSidebar(true)} />
                <h1>Dashboard</h1>
            </div>
            <span className="flex gap-x-2 items-center">
                Admin
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </span>
        </header>
     );
}

export default Header;