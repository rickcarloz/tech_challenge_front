import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: #343a40;
  color: white;
  padding: 10px 20px;
  width: 100%; /* Garante que o header ocupe toda a largura */
  border-bottom: 2px solid #23272b;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 10px; /* Reduz o padding para telas menores */
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Reduz o tamanho do texto no mobile */
    text-align: center; /* Garante alinhamento correto */
  }
`;

const NavContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between; /* Links à esquerda e botão à direita */
  align-items: center;
  width: 100%;
  max-width: 1200px; /* Limita a largura máxima */
  background-color: #23272b;
  border-radius: 4px;
  padding: 0 10px;

  @media (max-width: 768px) {
    flex-direction: column; /* Links e botão empilhados no mobile */
    gap: 10px; /* Espaçamento entre elementos empilhados */
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    flex-wrap: wrap; /* Quebra para a próxima linha, se necessário */
    justify-content: center; /* Centraliza os links no mobile */
    gap: 10px; /* Reduz o espaçamento entre os links */
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 10px 15px;

  &:hover {
    color: #007bff; /* Azul para destaque no hover */
    background-color: #3e444a; /* Fundo leve ao passar o mouse */
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    padding: 8px 10px; /* Reduz o padding para links no mobile */
    font-size: 0.9rem; /* Ajusta o tamanho do texto */
  }
`;

const LogoutButton = styled.button`
  background-color: #dc3545; /* Vermelho para o botão de sair */
  color: white;
  font-size: 1rem;
  font-weight: 500;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #b02a37; /* Tom mais escuro no hover */
  }

  @media (max-width: 768px) {
    width: 100%; /* Botão ocupa toda a largura no mobile */
    font-size: 0.9rem; /* Ajusta o tamanho do texto no mobile */
  }
`;

const Header: React.FC = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    localStorage.removeItem("role"); 
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <Title>Minha Aplicação</Title>
      <NavContainer>
        <Nav>
          <NavLink to="/">Home</NavLink>
          {role === "professor" && (
            <>
              <NavLink to="/create">Criar Postagem</NavLink>
              <NavLink to="/admin">Administração</NavLink>
            </>
          )}
        </Nav>
        <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
