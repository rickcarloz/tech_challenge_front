// src/Pages/PostDetail/PostDetail.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { usePosts } from "../../hooks/usePosts";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #007bff;
`;

const PostDetail: React.FC = () => {
  const { id } = useParams();
  const { posts } = usePosts();
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <p>Post não encontrado!</p>;
  }

  return (
    <Container>
      <Title>{post.title}</Title>
      <p>{post.content}</p>
      <small>Autor: {post.author}</small>
    </Container>
  );
};

export default PostDetail;
