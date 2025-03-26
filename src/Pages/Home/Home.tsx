import React, { useState } from "react";
import { usePosts } from "../../hooks/usePosts";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #f3f4f6;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 800px;
  padding: 12px 16px;
  margin: 20px 0;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
  }
`;

const PostContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PostItem = styled.div`
  padding: 20px;
  background-color: #343a40; /* Card preto */
  color: #ffffff; /* Texto branco para contraste */
  border-radius: 8px;
  border: 1px solid #444444;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

const Title = styled.h2`
  margin: 0 0 10px;
  color: #007bff;
  font-size: 1.5rem;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;

const PostContent = styled.p`
  margin: 0;
  color: #f8f9fa;
  line-height: 1.5;
  text-align: left;
`;

const PostDetails = styled.small`
  display: block;
  margin-top: 10px;
  color: #adb5bd;
  text-align: center;
`;

const ButtonContainer = styled.div`
  margin-top: 15px; /* Espaçamento entre autor e botão */
  text-align: center; /* Centraliza o botão abaixo */
`;

const ButtonLink = styled(Link)`
  display: inline-block;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none; /* Remove sublinhado padrão do Link */

  &:hover {
    background-color: #0056b3;
  }
`;

const PaginationContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #b0b0b0;
    cursor: not-allowed;
  }
`;

const Home: React.FC = () => {
  const { posts } = usePosts();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage); 
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Container>
      <Header />
      <SearchInput
        type="text"
        placeholder="Buscar posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <PostContainer>
        {currentPosts.map((post) => (
          <PostItem key={post._id}>
            <Title>{post.title}</Title>
            <PostContent>{post.content.slice(0, 150)}...</PostContent>
            <PostDetails>Autor: {post.author}</PostDetails>
            <ButtonContainer>
              <ButtonLink to={`/post/${post._id}`}>Ver Mais</ButtonLink>
            </ButtonContainer>
          </PostItem>
        ))}
      </PostContainer>
      <PaginationContainer>
        <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Anterior
        </Button>
        <span>Página {currentPage} de {totalPages}</span>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Próximo
        </Button>
      </PaginationContainer>
    </Container>
  );
};

export default Home;
