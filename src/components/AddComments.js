import React, { useState } from "react";
import postsService from "../services/PostsService";

export default function AddComments({ postId, addNewCommentCallback }) {
  const [newComment, setNewComment] = useState({ text: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await postsService.addComment(newComment, postId);
    if (data) {
      addNewCommentCallback(data);
    }
    setNewComment({ text: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newComment.text}
          onChange={({ target }) => setNewComment({ text: target.value })}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
