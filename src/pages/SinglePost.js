import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import postsService from "../services/PostsService";

export default function SinglePost() {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const data = await postsService.getId(id);
      setPosts(data);
    };
    if (id) {
      fetchPost();
    }
  }, [id]);

  return (
    <div>
      <article class="blog-post">
        <h2 class="blog-post-title">{posts.title}</h2>
        <p class="blog-post-meta">{posts.text}</p>
      </article>
    </div>
  );
}
