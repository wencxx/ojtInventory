import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../FldrMain/sidebar';
import SidebarMobile from "../FldrMain/sidebar-mobile";
import Header from '../FldrMain/header';
import { Toaster } from 'sonner';
import { useEffect, useState } from 'react';


function Layout() {
    const location = useLocation()

    const [showMobileSidebar, setShowMobileSidebar] = useState(false)

    useEffect(() => {
        setShowMobileSidebar(false)
    }, [location])

    return ( 
        <div className='flex w-screen min-h-screen bg-gray-100 font-Inter'>
            <Sidebar />
            <SidebarMobile showMobileSidebar={showMobileSidebar} setShowMobileSidebar={setShowMobileSidebar}  />
            <div className='w-full'>
                <Header setShowMobileSidebar={setShowMobileSidebar} />
                <Outlet />
                <Toaster />
            </div>
        </div>
     ); 
}

export default Layout;