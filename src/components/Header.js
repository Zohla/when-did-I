import { Link } from "react-router-dom";

import classes from "./Header.modules.css";

function Header() {
  return (
    <header className={classes.header}>
      <div>
        <h1>
          When did I last <span>- a task tracking app</span>
        </h1>
      </div>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about-page">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
