import React from "react";
import styled from "styled-components";
import { usePosts } from "../../hooks/usePosts";

const Container = styled.div`
  margin: 20px auto;
  padding: 20px;
  max-width: 800px;
  background-color: #23272b;
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
`;

const PostItem = styled.li`
  margin-bottom: 20px;
  padding: 15px;
  background-color: #343a40;
  border-radius: 6px;
  border: 1px solid #ddd;
`;

const PostTitle = styled.h2`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 10px;
`;

const PostContent = styled.p`
  color: #bcbcbc;
  line-height: 1.6;
`;

const PostDetails = styled.small`
  font-size: 0.9rem;
  color: #bcbcbc;
`;

const PostList: React.FC = () => {
  const { posts, loading, error } = usePosts();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <Title>Lista de Posts</Title>
      <ul>
        {posts.map((post) => (
          <PostItem key={post._id}>
            <PostTitle>{post.title}</PostTitle>
            <PostContent>{post.content}</PostContent>
            <PostDetails>
              Por: {post.author}
            </PostDetails>
          </PostItem>
        ))}
      </ul>
    </Container>
  );
};

export default PostList;
