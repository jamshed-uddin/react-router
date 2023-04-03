import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const FriendDetail = () => {
  const friendDetail = useLoaderData();

  return (
    <div>
      <h3>Individual friend</h3>
      <h2>Name:{friendDetail.name}</h2>
    </div>
  );
};

export default FriendDetail;
