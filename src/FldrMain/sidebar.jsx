import { NavLink } from 'react-router-dom';
import { ChartColumn, ShoppingBasket } from 'lucide-react';


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

function Sidebar() {
    return ( 
        <div className="w-2/12 h-screen bg-slate-800 text-white p-5 space-y-10 hidden lg:block">
            <h1 className="uppercase font-medium text-xl tracking-wide text-center">Prodaxxx</h1>
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

export default Sidebar;