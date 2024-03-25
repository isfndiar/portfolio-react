import { Link, NavLink, Outlet } from "react-router-dom";
import * as Icon from "react-feather";
import { useEffect, useState } from "react";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY >= 200) {
      setVisible(false);
    } else if (window.scrollY < 200) {
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
      <nav
        className={`${
          visible ? "" : isActive ? "" : "translate-y-[-100px]"
        } fixed top-0 right-0 left-0 flex justify-around text-black font-bold py-[1.5rem] px-[5%] z-[9999] transition-all duration-300`}
      >
        <div className="text-[1.2rem] uppercase">
          <NavLink className={"dark:text-white text-black"}>
            {" "}
            Isfandiar Adi{" "}
          </NavLink>
        </div>
        <Navigation isScroll={`list-link`} isActive={isActive} />
        {isActive ? (
          <Navigation
            isScroll={
              "fixed flex w-full h-full flex-col gap-[2rem] items-center justify-center bg-[whitesmoke] pb-20 top-0 left-0 right-0 bottom-0 transition-all  border-none ease-in-out duration-300"
            }
          />
        ) : null}
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

const Navigation = ({ isActive, isClick, isScroll }) => {
  return (
    <div className={`${isScroll} `}>
      <a href={"#profile"} hrefLang="#profile">
        Profile
      </a>
      <a href={`#about`}>About</a>
      <a href={`#projects`}>Projects</a>
      <a href={`#contacts`}>Contacts</a>
    </div>
  );
};

export default Navbar;
