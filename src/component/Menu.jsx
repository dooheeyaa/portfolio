import "../style/Menu.css";

const Menu = () => {
  return (
    <div className="menu-wrapper">
      <ul className="menu-container">
        <li className="menu-item">
          <a href="#open" className="menu-link">
            Home
          </a>
        </li>
        <li className="menu-item">
          <a href="#introduce" className="menu-link">
            Introduce
          </a>
        </li>
        <li className="menu-item">
          <a href="#tech" className="menu-link">
            Tech
          </a>
        </li>
        <li className="menu-item">
          <a href="#project" className="menu-link">
            Project
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
