import { Link } from "react-router-dom";
import MenuFade from "./Menu";

const Header = () => {
  return (
    <header>
        <MenuFade />
      <nav>
        <ul>
          <li>
            <Link to="/meal">Meal Generator</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
