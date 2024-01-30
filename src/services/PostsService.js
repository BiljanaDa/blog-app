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
}

const postsService = new PostsService();
export default postsService;
