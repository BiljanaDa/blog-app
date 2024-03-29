import React from "react";
import HttpService from "./HttpService";

class PostsService extends HttpService {
  async getAll() {
    try {
      const { data } = await this.client.get(
        'posts?filter={"include":["comments"]}'
      );
      return data;
    } catch (error) {
      console.log(error);
    }
    return [];
  }

  async getId(id) {
    try {
      const { data } = await this.client.get(
        `posts/${id}?filter={"include":["comments"]}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  async add(newPost) {
    try {
      const { data } = await this.client.post("posts", newPost);
      return data;
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  async edit(id, post) {
    try {
      const { data } = await this.client.put(`posts/${id}`, post);
      return data;
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  async delete(id) {
    try {
      const { data } = await this.client.delete(`posts/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  async addComment(comment, postId) {
    try {
      const url = `posts/${postId}/comments`;
      const { data } = await this.client.post(url, comment);
      return data;
    } catch (error) {
      console.log(error);
    }
    return null;
  }
}

const postsService = new PostsService();
export default postsService;
