// src/Pages/Admin/Admin.tsx
import React, { useState } from "react";
import { usePosts } from "../../hooks/usePosts";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header/Header";

const Admin: React.FC = () => {
  const { posts } = usePosts();

  // Estado para a página atual e número de itens por página
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Calcular a lista de posts a ser exibida na página atual
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Funções para navegar entre as páginas
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Número total de páginas
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  return (
    <>
      <Header />

      <AdminContainer>
        <AdminTitle>Administração de Posts</AdminTitle>
        <PostsList>
          {currentPosts.map((post) => (
            <PostItem key={post._id}>
              <PostTitle to={`/edit/${post._id}`}>{post.title}</PostTitle>
              <PostDescription>
                {post.content.length > 100
                  ? `${post.content.substring(0, 100)}...`
                  : post.content}
              </PostDescription>
              <Actions>
                <EditButton to={`/edit/${post._id}`}>Editar</EditButton>
              </Actions>
            </PostItem>
          ))}
        </PostsList>

        <Pagination>
          <PageButton onClick={prevPage} disabled={currentPage === 1}>
            Anterior
          </PageButton>
          <PageInfo>
            Página {currentPage} de {totalPages}
          </PageInfo>
          <PageButton onClick={nextPage} disabled={currentPage === totalPages}>
            Próxima
          </PageButton>
        </Pagination>
      </AdminContainer>
    </>
  );
};

export default Admin;

// Estilizando com styled-components
const AdminContainer = styled.div`
  padding: 20px;
  background-color: #f4f4f9;
  min-height: 100vh;  /* Garantir que a altura ocupe a tela inteira */
`;

const AdminTitle = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const PostsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PostItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PostTitle = styled(Link)`
  font-size: 1.5rem;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const PostDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center; /* Centraliza os itens */
  width: 100%; /* Garante que o container ocupe toda a largura */
`;

const EditButton = styled(Link)`
  padding: 8px 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: #2980b9;
  }
`;

const DeleteButton = styled.button`
  padding: 8px 16px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c0392b;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const PageButton = styled.button`
  padding: 8px 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }

  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
  }
`;

const PageInfo = styled.div`
  font-size: 1rem;
  color: #333;
  align-self: center;
`;
