import React, { useEffect, useState } from "react";
import postsService from "../services/PostsService";
import { useNavigate, useParams } from "react-router-dom";

export default function AddPost() {
  const [newPost, setNewPost] = useState({ title: "", text: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      const data = await postsService.getId(id);
      setNewPost(data);
    };
    if (id) {
      fetchPost();
    }
  }, [id]);

  const handleAddPost = async (e) => {
    e.preventDefault();
    let data = null;
    if (id) {
      data = await postsService.edit(id, newPost);
    } else {
      data = await postsService.add(newPost);
    }

    if (!data) {
      alert("The new post is not created");
      return;
    }

    navigate("/posts");
  };

  const handleResetForm = () => {
    setNewPost({ title: "", text: "" });
  };

  return (
    <div>
      <form onSubmit={handleAddPost} className="needs-validation">
        <div class="mb-3">
          <h2>{id ? "Edit post" : "Add new post"}</h2>
          <label for="text" class="form-label">
            Title
          </label>
          <input
            required
            minLength={2}
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
            required
            maxLength={300}
            type="text"
            class="form-control"
            id="text"
            value={newPost.text}
            onChange={(e) => setNewPost({ ...newPost, text: e.target.value })}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          {id ? "Edit" : "Add"}
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleResetForm}
        >
          Reset
        </button>
      </form>
    </div>
  );
}
