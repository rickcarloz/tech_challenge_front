import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: #343a40;
  color: white;
  padding: 10px 20px;
  width: 100vw; /* Garante que o header ocupe toda a largura */
  border-bottom: 2px solid #23272b;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%; /* Preenche toda a largura do navbar */
  max-width: 1200px; /* Limita a largura em telas grandes */
  background-color: #23272b;
  border-radius: 4px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 10px 15px;

  &:hover {
    color: #007bff;
    background-color: #3e444a; /* Destaque no hover */
    border-radius: 4px;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>Minha Aplicação</Title>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create">Criar Postagem</NavLink>
        <NavLink to="/admin">Administração</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
