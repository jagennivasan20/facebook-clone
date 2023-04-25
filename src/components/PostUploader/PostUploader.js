import React, { useState } from "react";
import "./PostUploader.css";
import { LinearProgress } from "@mui/material";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { db, storage, timestamp } from "../../firebase";
import { Videocam, PhotoLibrary, InsertEmoticon } from "@mui/icons-material";
const PostUploader = () => {
  const user = useSelector((state) => state.userData.user);
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`images/${image}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapShot) => {
        const progress = Math.round(snapShot.bytesTransferred / snapShot.totalBytes) * 100;
        setProgress(progress);
      },
      (err) => {
        console.log(err);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              message: input,
              timestamp: timestamp,
              profilePic: user.photoURL,
              username: user.displayName,
              image: url,
            });
            setProgress(0);
            setInput("");
            setImage("");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    );
  };
  return (
    <div className="postuploader">
      <div className="postuploader__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder={`what's on your mind ${user.displayName}`}
            className="postuplader__input"
          />
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <button type="submit" onClick={handleSubmit}>
            hidden
          </button>
        </form>
      </div>
      {progress > 0 && (
        <LinearProgress variant="determinate" value={progress} />
      )}
      <div className="postuploader__bottom">
        <div className="postuploader__option">
          <Videocam style={{ color: "red" }} />
          <h3>Live video</h3>
        </div>
        <div className="postuploader__option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>photos</h3>
        </div>
        <div className="postuploader__option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default PostUploader;
