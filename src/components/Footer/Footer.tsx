// src/components/Footer/Footer.tsx
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #343a40;
  color: white;
  padding: 15px;
  text-align: center;
  width: 100%;
  border-top: 2px solid #23272b;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #bcbcbc; /* Cor sutil para o texto */
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>© 2025 Minha Aplicação. Todos os direitos reservados.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
