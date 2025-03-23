// src/Pages/EditPost/EditPost.tsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { usePosts } from "../../hooks/usePosts";

const Container = styled.div`
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
`;

const EditPost: React.FC = () => {
  const { id } = useParams();
  const { posts, addPost } = usePosts();
  const [post, setPost] = useState({ title: "", content: "", author: "" });

  useEffect(() => {
    const existingPost = posts.find((p) => p.id === id);
    if (existingPost) setPost(existingPost);
  }, [id, posts]);

  const handleSave = () => {
    // Lógica para salvar alterações
    addPost(post);
  };

  return (
    <Container>
      <Input
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <Textarea
        value={post.content}
        onChange={(e) => setPost({ ...post, content: e.target.value })}
      />
      <Input
        value={post.author}
        onChange={(e) => setPost({ ...post, author: e.target.value })}
      />
      <Button onClick={handleSave}>Salvar Alterações</Button>
    </Container>
  );
};

export default EditPost;
