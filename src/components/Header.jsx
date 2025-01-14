import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
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
