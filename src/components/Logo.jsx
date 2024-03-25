import * as Icon from "react-feather";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <>
      <Badge to={`https://instagram.com`}>
        <Icon.Instagram />
      </Badge>
      <Badge to={`https://facebook.com`}>
        <Icon.Facebook />
      </Badge>
      <Badge to={`https://github.com/isfndiar`}>
        <Icon.GitHub />
      </Badge>
      <Badge to={`https://www.linkedin.com/in/isfandiar-adi-048796253/`}>
        <Icon.Linkedin />
      </Badge>
    </>
  );
}

const Badge = ({ children, to }) => {
  return (
    <Link className={"logo--icon"} to={to} target="_blank">
      {children}
    </Link>
  );
};

export default Logo;
