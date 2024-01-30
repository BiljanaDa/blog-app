import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import postsService from "../services/PostsService";
import AddComments from "../components/AddComments";
import useFormattedDate from "../hooks/useFormattedDate";

export default function SinglePost() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const formattedDate = useFormattedDate(post ? post.createdAt : "yyyy-MM-dd");

  useEffect(() => {
    const fetchPost = async () => {
      const data = await postsService.getId(id);
      setPost(data);
    };
    if (id) {
      fetchPost();
    }
  }, [id]);

  const handleAddNewComment = (comment) => {
    setPost({ ...post, comments: [...post.comments, comment] });
  };

  return (
    <div>
      <article class="blog-post">
        <h2 class="blog-post-title">{post.title}</h2>
        <p class="blog-post-meta">{post.text}</p>
        <p>Datum: {formattedDate}</p>
        <AddComments
          postId={post.id}
          addNewCommentCallback={handleAddNewComment}
        />
        {post.comments && post.comments.length ? (
          <ul>
            {post.comments.map((comment) => (
              <li>{comment.text}</li>
            ))}
          </ul>
        ) : (
          <p>No comments</p>
        )}
      </article>
    </div>
  );
}
