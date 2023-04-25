import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "../StoryReel/StoryReel";
import PostUploader from "../PostUploader/PostUploader";
import { db } from "../../firebase";
import Posts from "../Posts/Posts";
const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              data: doc.data(),
            };
          })
        );
      });
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <PostUploader />
      {posts.map((post) => {
        return (
          <Posts
            key={post.id}
            profilepic={post.data.profilepic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          />
        );
      })}
    </div>
  );
};

export default Feed;
