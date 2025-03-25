import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // useNavigate para navegação
import { usePosts } from "../../hooks/usePosts";
import styled from "styled-components";
import Header from "../../components/Header/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 20px; 
  background-color: #f3f4f6; 
`;

const Card = styled.div`
  background-color: #343a40; /* Fundo preto do card */
  color: #ffffff; /* Texto branco para contraste */
  border-radius: 8px; /* Arredondamento das bordas */
  padding: 20px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra para profundidade */
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #007bff; /* Azul do título */
  text-align: center;
`;

const Content = styled.p`
  margin: 15px 0;
  color: #f8f9fa; /* Texto branco para contraste */
  line-height: 1.6; /* Melhora a legibilidade */
  text-align: left; /* Alinha o conteúdo à esquerda */
`;

const Author = styled.small`
  display: block;
  margin-top: 10px;
  color: #adb5bd; /* Cinza suave para autor */
  text-align: center;
  font-size: 0.9rem;
`;

const Button = styled.button`
  background-color: #007bff; /* Cor do botão */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;
  
  &:hover {
    background-color: #0056b3; /* Cor do botão ao passar o mouse */
  }
`;

const PostDetail: React.FC = () => {
  const { id } = useParams();
  const { posts } = usePosts();
  const post = posts.find((post) => post._id === id);
  const navigate = useNavigate(); // hook para navegação

  if (!post) {
    return (
      <Container>
        <Header />
        <Card>
          <Title>Post não encontrado!</Title>
        </Card>
      </Container>
    );
  }

  return (
    <>
      <Header />
      <Container>
        <Card>
          <Title>{post.title}</Title>
          <Content>{post.content}</Content>
          <Author>Autor: {post.author}</Author>
        </Card>

        <Button onClick={() => navigate('/')}>Voltar</Button> {/* Redireciona para a página inicial */}

      </Container>
    </>
  );
};

export default PostDetail;
