import LogoJSX from "../logo/logo";
import Button from "../button/button";
import NavBar from "../navbar/navbar.css";
import SearchBarJsx from "../searchbar/searchbar";
const NavbarJsx = () => {
  return (
    <div>
      <nav className="NavBar">
        <LogoJSX />
        <SearchBarJsx />
        <Button />
      </nav>
    </div>
  );
};

export default NavbarJsx;
