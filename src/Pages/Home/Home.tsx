// src/Pages/Home/Home.tsx
import React, { useState } from "react";
import { usePosts } from "../../hooks/usePosts";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const PostItem = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background-color: #343a40;
  color: #fff;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const Title = styled.h2`
  margin: 0 0 10px;
  color: #007bff;
`;

const Home: React.FC = () => {
  const { posts } = usePosts();
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <SearchInput
        type="text"
        placeholder="Buscar posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredPosts.map((post) => (
        <PostItem key={post.id}>
          <Link to={`/post/${post.id}`}>
            <Title>{post.title}</Title>
          </Link>
          <p>{post.content.slice(0, 100)}...</p>
          <small>Autor: {post.author}</small>
        </PostItem>
      ))}
    </Container>
  );
};

export default Home;
