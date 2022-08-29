import Category from "./Category";
import Search from "./Search";
import { GiKnifeFork } from "react-icons/gi";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link className="logo" to={"/"}>
        <GiKnifeFork />
        <h1>Delecious</h1>
      </Link>
      <Search />
      <Category />
    </header>
  );
};

export default Header;
