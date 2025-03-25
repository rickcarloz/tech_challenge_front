import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Header from "../../components/Header/Header";

const Container = styled.div`
  background-color: #343a40; /* Fundo escuro do card */
  color: #ffffff; /* Texto branco para contraste */
  border-radius: 8px; /* Arredondamento das bordas */
  padding: 30px;
  max-width: 600px; /* Maior largura para um layout mais confortável */
  margin: 20px auto; /* Centraliza na tela */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra para destaque */
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px; /* Mais espaço entre os inputs */
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #495057; /* Fundo escuro dos inputs */
  color: #ffffff; /* Texto branco */
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #495057; /* Fundo escuro */
  color: #ffffff; /* Texto branco */
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Posiciona os botões lado a lado */
  gap: 10px; /* Espaçamento entre os botões */
`;

const Button = styled.button`
  flex: 1; /* Faz com que os botões ocupem o mesmo tamanho */
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: white;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

const SaveButton = styled(Button)`
  background-color: #007bff; /* Azul para salvar */
`;

const DeleteButton = styled(Button)`
  background-color: #dc3545; /* Vermelho para excluir */
`;

const EditPost: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: "", content: "", author: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3010/posts/${id}`);
        setPost(response.data);
        setLoading(false);
      } catch (err) {
        setError("Erro ao carregar o post.");
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:3010/posts/${id}`, post);
      alert("Post atualizado com sucesso!");
      navigate("/");
    } catch (err) {
      setError("Erro ao atualizar o post.");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Tem certeza que deseja excluir este post?")) {
      try {
        await axios.delete(`http://localhost:3010/posts/${id}`);
        alert("Post excluído com sucesso!");
        navigate("/admin");
      } catch (err) {
        setError("Erro ao excluir o post.");
      }
    }
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />
      <Container>
        <Input
          type="text"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          placeholder="Título"
        />
        <Textarea
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
          placeholder="Conteúdo"
        />
        <Input
          type="text"
          value={post.author}
          onChange={(e) => setPost({ ...post, author: e.target.value })}
          placeholder="Autor"
        />
        <ButtonContainer>
          <DeleteButton onClick={handleDelete}>Excluir Post</DeleteButton>
          <SaveButton onClick={handleSave}>Salvar Alterações</SaveButton>
        </ButtonContainer>
        
      </Container>
      
    </>
  );
};

export default EditPost;
