// src/Pages/AddPost/AddPost.tsx
import React, { useState } from "react";
import styled from "styled-components";
import { usePosts } from "../../hooks/usePosts";

const Container = styled.div`
  margin: 20px auto;
  padding: 20px;
  max-width: 500px;
  background-color: #23272b;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #fff;
  text-align: center;
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #343a40;
  color: #fff;
`;

const Textarea = styled.textarea`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #343a40;
  color: #fff;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  color: white;
  background-color: #0069d9;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const AddPost: React.FC = () => {
  const { addPost } = usePosts();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleAddPost = () => {
    const newPost = { title, content, author };
    addPost(newPost);
    setTitle("");
    setContent("");
    setAuthor("");
  };

  return (
    <Container>
      <Title>Adicionar Novo Post</Title>
      <Input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="Conteúdo"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <Button onClick={handleAddPost}>Adicionar Post</Button>
    </Container>
  );
};

export default AddPost;
