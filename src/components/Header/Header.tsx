// src/components/Header/Header.tsx
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #343a40;
  color: white;
  padding: 20px;
  text-align: center;
  width: 100%;
  border-bottom: 2px solid #23272b;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>Minha Aplicação</Title>
    </HeaderContainer>
  );
};

export default Header;
