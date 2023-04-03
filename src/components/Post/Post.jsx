import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = (props) => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(`/post/${id}`);
  };
  const { id, title, body } = props.post;
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h4>ID:{id}</h4>
      <p>{title}</p>
      <p>{body}</p>
      <Link to={`/post/${id}`}>Detail</Link>
      <Link to={`/post/${id}`}>
        <button>Detail via button</button>
      </Link>
      <button onClick={navigateHandler}>Detail via useNavigate</button>
    </div>
  );
};

export default Post;
