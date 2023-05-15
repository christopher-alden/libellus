import ProfileIcon from "../ui/ProfileIcon";
import { useEffect, useState } from "react";


export default function Navbar(){
    const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset
        if (scrollTop < 50) {
          setIsNavbarTransparent(true);
        } else {
          setIsNavbarTransparent(false);
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const navbarBackgroundColor = isNavbarTransparent ? '#2e323980' : '#2e3239';
    const navbarBackgroundTransition = isNavbarTransparent ? 'background 0.5s ease-in-out' : 'background 0.5s ease-in-out';
    const navbarBlur = 'blur(10px)';
  
    return(
        <div className="fixed z-50 top-0 grid grid-cols-3 p-2 w-full bg-d-secondary" style={{ backgroundColor: navbarBackgroundColor, transition: navbarBackgroundTransition, backdropFilter: navbarBlur }}>
            <div className="my-auto text-center text-d-accent text-4xl font-bold prompt">
                LIBELLUS
            </div>
            <div className="flex my-auto text-d-text text-lg gap-4 poppins justify-center">
                <button className="hover:text-d-light transition-all duration-100">Home</button>
                <button className="hover:text-d-light transition-all duration-100">Courses</button>
                <button className="hover:text-d-light transition-all duration-100">Videos</button>
                <button className="hover:text-d-light transition-all duration-100">Practice</button>
                <button className="hover:text-d-light transition-all duration-100">Videos</button>
            </div>
            <div className="my-auto text-center text-d-accent text-4xl font-bold">
                <ProfileIcon/>
            </div>
        </div>
    );
}
