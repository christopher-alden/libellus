import ProfileIcon from "../ui/ProfileIcon";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);
  const [activeMenu, setActiveMenu] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop < 200) {
        setIsNavbarTransparent(true);
      } else {
        setIsNavbarTransparent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarBackgroundColor = isNavbarTransparent ? "#2e323980" : "#2e3239";
  const navbarBackgroundTransition = isNavbarTransparent
    ? "background 0.5s ease-in-out"
    : "background 0.5s ease-in-out";
  const navbarBlur = "blur(10px)";

  return (
    <div
      className="fixed z-50 top-0 grid grid-cols-3 p-2 w-full bg-d-secondary"
      style={{
        backgroundColor: navbarBackgroundColor,
        transition: navbarBackgroundTransition,
        backdropFilter: navbarBlur,
      }}
    >
      <div className="my-auto text-center text-d-accent text-4xl font-bold prompt">
        LIBELLUS
      </div>
      <div className="flex my-auto text-d-text text-lg gap-4 poppins justify-center">
        <button
          className={activeMenu === "home" ? "text-d-accent transition-all duration-150" : ""}
          onClick={() => setActiveMenu("home")}
        >
          Home
        </button>
        <button
          className={activeMenu === "courses" ? "text-d-accent transition-all duration-150" : ""}
          onClick={() => setActiveMenu("courses")}
        >
          Courses
        </button>
        <button
          className={activeMenu === "videos" ? "text-d-accent transition-all duration-150" : ""}
          onClick={() => setActiveMenu("videos")}
        >
          Videos
        </button>
        <button
          className={activeMenu === "practice" ? "text-d-accent transition-all duration-150" : ""}
          onClick={() => setActiveMenu("practice")}
        >
          Practice
        </button>
        <button
          className={activeMenu === "more" ? "text-d-accent transition-all duration-150" : ""}
          onClick={() => setActiveMenu("more")}
        >
          More
        </button>
      </div>
      <div className="my-auto text-center text-d-accent text-4xl font-bold">
        <ProfileIcon />
      </div>
    </div>
  );
}
