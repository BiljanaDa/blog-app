import React, { useState } from "react";
import postsService from "../services/PostsService";
import { useParams } from "react-router-dom";

export default function AddPost() {
  const [newPost, setNewPost] = useState({ title: "", text: "" });
  const { id } = useParams();

  const handleAddPost = async (e) => {
    e.preventDefault();
    await postsService.add(newPost);
  };
  return (
    <div>
      <form onSubmit={handleAddPost} className="needs-validation">
        <div class="mb-3">
          <h2>Add a new post:</h2>
          <label for="text" class="form-label">
            Title
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
        </div>
        <div class="mb-3">
          <label for="text" class="form-label">
            Text
          </label>
          <input
            type="text"
            class="form-control"
            id="text"
            value={newPost.text}
            onChange={(e) => setNewPost({ ...newPost, text: e.target.value })}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
