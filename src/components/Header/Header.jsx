import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <Link to="/">HOME</Link>
      <Link to="/friends">FRIENDS</Link>
      <Link to="/posts">POSTS</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/contact">CONTACT</Link>
    </div>
  );
};

export default Header;
