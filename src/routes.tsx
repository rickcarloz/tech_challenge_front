// src/routes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import PostDetail from "./Pages/PostDetail/PostDetail";
import AddPost from "./Pages/AddPost/AddPost";
import EditPost from "./Pages/EditPost/EditPost";
import Admin from "./Pages/Admin/Admin";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<PostDetail />} />
      <Route path="/create" element={<AddPost />} />
      <Route path="/edit/:id" element={<EditPost />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default AppRoutes;
