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
        <nav>
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
                }
            
            </div>
           <ul className="md:flex ">
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