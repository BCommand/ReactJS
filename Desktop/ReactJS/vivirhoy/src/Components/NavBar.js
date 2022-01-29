import "./NavBar.css";

import CardWidget from "./CardWidget.js";

const NavBar = (props) => {
  console.log(props);

  return (
    <div>
      <nav
        className="Navigation"
        style={{ border: `10px solid ${props.myColor}` }}
      >
        <ul>
          <li>
            <CardWidget />
          </li>
          <li>Home</li>
          <li>Galeria</li>
          <li>Info</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;

