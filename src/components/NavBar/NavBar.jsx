import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const NavBar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/services', name: 'Services', id: 'services' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '/dashboard', name: 'Dashboard', id: 'dashboard' },
      ];
      
    
    
    return (
        <nav className="text-black bg-yellow-400 p-6">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
                }
            
            </div>
           <ul className={`md:flex absolute md:static duration-1000
           ${open ? 'top-18' : '-top-60'} 
           bg-yellow-400 px-6 `}>
           {
                routes.map(route => <Link key={route.id}
                       route={route}>
               </Link>)
            }
           </ul>
        </nav>
    );
};

export default NavBar;