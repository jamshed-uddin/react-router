import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const postDetail = useLoaderData();
  const navigateToBack = useNavigate();
  const goBackHandler = () => {
    navigateToBack(-1);
  };
  return (
    <div>
      <h3>Post details appears here</h3>
      <div style={{ border: "2px solid black" }}>
        <h2>{postDetail.title}</h2>
        <h2>{postDetail.body}</h2>
        <button onClick={goBackHandler}>Go back</button>
      </div>
    </div>
  );
};

export default PostDetail;
