// src/Pages/Admin/Admin.tsx
import React from "react";
import { usePosts } from "../../hooks/usePosts";
import { Link } from "react-router-dom";

const Admin: React.FC = () => {
  const { posts } = usePosts();

  return (
    <div>
      <h1>Administração de Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/edit/${post.id}`}>{post.title}</Link>
            <button>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
