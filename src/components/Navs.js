import React from "react";
import { Link } from "react-router-dom";

export default function Navs() {
  return (
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <Link to={"/posts"} class="nav-link active">
          Posts
        </Link>
      </li>
    </ul>
  );
}
