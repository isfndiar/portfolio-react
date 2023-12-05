import * as Icon from "react-feather";
import { Link } from "react-router-dom";

function Logo() {

  const classLogo = `hover:bg-[#fffffff] hover:p-2`
  return (
    <>
      <Link to={`https://instagram.com`} target="_blank" className={classLogo}>
        <Icon.Instagram />
      </Link>
      <Link to={`https://facebook.com`} target="_blank">
        <Icon.Facebook />
      </Link>
      <Link to={`https://github.com/isfndiar`} target="_blank">
        <Icon.GitHub />
      </Link>
      <Link
        to={`https://www.linkedin.com/in/isfandiar-adi-048796253/`}
        target="_blank"
      >
        <Icon.Linkedin />
      </Link>
    </>
  );
}

export default Logo;
