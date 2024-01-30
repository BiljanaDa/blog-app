import React from "react";
import HttpService from "./HttpService";

class PostsService extends HttpService {
  async getAll() {
    try {
      const { data } = await this.client.get("/posts");
      return data;
    } catch (error) {
      console.log(error);
    }
    return [];
  }

  async getId(id) {
    try {
      const { data } = await this.client.get(`posts/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
    return null;
  }
}

const postsService = new PostsService();
export default postsService;
