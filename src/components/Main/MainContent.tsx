// src/components/Main/MainContent.tsx
import React, { ReactNode } from "react";
import styled from "styled-components";

interface MainContentProps {
  children: ReactNode;
}

const MainContentContainer = styled.div`
  flex: 1; /* Faz o MainContent ocupar o espaço restante */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #ffffff; /* Texto primário branco */
  width: 100%;
`;

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return <MainContentContainer>{children}</MainContentContainer>;
};

export default MainContent;
