import React, { useEffect, useState } from "react";
import postsService from "../services/PostsService";
import { Link, useNavigate } from "react-router-dom";

export default function AppPosts() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await postsService.getAll();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    const data = await postsService.delete(id);
    if (data.count) {
      setPosts(posts.filter((post) => post.id !== id));
    }
  };

  return (
    <div>
      <h1>Posts: </h1>
      {posts.map((post) => (
        <div class="row mb-2">
          <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div
                class="col p-4 d-flex flex-column position-static"
                key={post.id}
              >
                <strong class="d-inline-block mb-2 text-primary">Post</strong>
                <h3 class="mb-0">{post.title}</h3>
                <p class="card-text mb-auto">{post.text}</p>
                <div>
                  {post.comments && post.comments.length ? (
                    <span>Number of comments: {post.comments.length}</span>
                  ) : (
                    <span>No comments</span>
                  )}
                </div>
                <Link to={`/posts/${post.id}`}>View post</Link>
                <button
                  class="btn btn-info"
                  onClick={() => navigate(`/edit/${post.id}`)}
                >
                  Edit
                </button>
                <button
                  class="btn btn-danger"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
