//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import dummyData from "../../dummy-data";
import Post from "./Post";
import "./Posts.css";
// import data 

const PostsPage = () => {
  // set up state for your data
  const [data] = useState(dummyData)
  console.log("From PostsPage: ", data)
  return (
    <div className="posts-container-wrapper">
      {data.map((post, index) => {
        return <Post key={index} post={post} />
      })}
    </div>
  );
};

export default PostsPage;

