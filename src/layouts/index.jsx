import { NavLink, Outlet } from "react-router-dom";
import * as Icon from "react-feather";
import { useEffect, useState } from "react";

function RootLayouts() {
  const [isActive, setIsActive] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  

  const handleScroll = () => {
    // const currentScrollPos = window.scrollY;
    // const isVisible = prevScrollPos > currentScrollPos;
    // setPrevScrollPos(currentScrollPos);
    // setVisible(isVisible);
    if (window.scrollY == 200 || window.scrollY > 200) {
      setVisible(!true)
    } else if (window.scrollY == 0) {
      setVisible(true)
    }
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <nav className={visible ? "" : "active"}>
        <div className="logo">
          <NavLink> Isfandiar Adi </NavLink>
        </div>
        
        <div className={`list-link ${isActive ? "active" : ""}`}>
          <NavLink to={"/profile"} hrefLang="#profile">
            Profile
          </NavLink>
          <NavLink to={`/about`}>About</NavLink>
          <NavLink to={`/projects`}>Projects</NavLink>
          <NavLink to={`/contacts`}>Contacts</NavLink>
        </div>
        
        
      </nav>
          <Icon.Menu
            color="green"
            className={`menu-icon ${isActive ? "active" : ""}  ${window.scrollY == 200 || window.scrollY > 200 ? 'scroll' : ''}`}
            onClick={handleClick}
          />

      <Outlet />
    </>
  );
}

export default RootLayouts;
