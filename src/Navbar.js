import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>TalktoBella</h1>
      <div className="links">
        {<a href="/">Home</a>}
        {<a href="/">New Blog</a>}
      </div>
    </div>
  );
};

export default Navbar;
