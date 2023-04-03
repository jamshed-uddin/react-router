import React from "react";
import { Link } from "react-router-dom";

const Friend = (props) => {
  const { name, id } = props.friend;
  return (
    <div style={{ border: "2px solid black", padding: "15px" }}>
      <h3>{name}</h3>
      <Link to={`/friend/${id}`}>See detail</Link>
    </div>
  );
};

export default Friend;
