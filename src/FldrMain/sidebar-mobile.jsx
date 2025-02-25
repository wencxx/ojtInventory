import { NavLink } from 'react-router-dom';
import { ChartColumn, ShoppingBasket, PanelLeftClose } from 'lucide-react';


const navLinks = [
    {
        path: '/',
        icon: <ChartColumn />,
        label: 'Dashboard'
    },
    {
        path: '/products',
        icon: <ShoppingBasket />,
        label: 'Products'
    }
]


function Links({ path, icon, label }) {
    return <li>
        <NavLink 
            to={path} 
            className={({ isActive }) => 
                `text-lg flex items-center gap-x-2 hover:bg-black/20 p-2 rounded ${isActive ? 'bg-black/20' : ''}`
            }
        >
            {icon}
            <span>{label}</span>
        </NavLink>
    </li>
}

function SidebarMobile({ showMobileSidebar, setShowMobileSidebar }) {
    return ( 
        <div className={`w-2/3 h-screen bg-slate-800 text-white p-5 space-y-10 fixed top-0 left-0 lg:hidden z-50 duration-300 ${showMobileSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
             <div className='flex justify-between items-center'>
                 <h1 className="uppercase font-medium text-xl tracking-wide text-center">Prodaxxx</h1>
                 <PanelLeftClose onClick={() => setShowMobileSidebar(false)} />
             </div>
             <nav>
                 <ul className='space-y-1'>
                     {navLinks.map((link, index) => (
                         <Links key={index} {...link} />
                     ))}
                 </ul>
             </nav>
       </div>
     );
}

export default SidebarMobile;