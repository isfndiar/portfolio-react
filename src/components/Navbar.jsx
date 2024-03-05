import { Link, NavLink, Outlet } from "react-router-dom";
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
      setVisible(!true);
    } else if (window.scrollY == 0) {
      setIsActive(false);
      setVisible(true);
    }
  };

  const handleClick = () => {
    setIsActive(!isActive);
    console.log(isActive);
    console.log(visible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <nav className={visible ? "" : isActive ? "click" : "active"}>
        <div className="logo">
          <NavLink> Isfandiar Adi </NavLink>
        </div>

        <div className={`list-link ${isActive ? "active" : ""}`}>
          <a href={"#profile"} hrefLang="#profile">
            Profile
          </a>
          <a href={`#about`}>About</a>
          <a href={`#projects`}>Projects</a>
          <a href={`#contacts`}>Contacts</a>
        </div>
      </nav>
      <Icon.Menu
        color="black"
        className={`menu-icon ${isActive ? "active" : ""}  ${
          window.scrollY == 200 || window.scrollY > 200 ? "scroll" : ""
        }`}
        onClick={handleClick}
      />

      <Outlet />
    </>
  );
}

export default RootLayouts;
