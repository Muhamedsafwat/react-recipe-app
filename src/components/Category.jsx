import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";

import { NavLink } from "react-router-dom";

import "../styles/header.css";

const Category = () => {
  return (
    <nav>
      <ul>
        <NavLink to={"/cuisine/italian"}>
          <li>
            <div className="icon">
              <FaPizzaSlice color="white" />
            </div>
            <h4>Italian</h4>
          </li>
        </NavLink>
        <NavLink to={"/cuisine/american"}>
          <li>
            <div className="icon">
              <FaHamburger color="white" />
            </div>
            <h4>American</h4>
          </li>
        </NavLink>
        <NavLink to={"/cuisine/thai"}>
          <li>
            <div className="icon">
              <GiNoodles color="white" />
            </div>
            <h4>Thai</h4>
          </li>
        </NavLink>
        <NavLink to={"/cuisine/japanese"}>
          <li>
            <div className="icon">
              <GiChopsticks color="white" />
            </div>
            <h4>Japanese</h4>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Category;
