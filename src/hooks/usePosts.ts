// src/hooks/usePosts.ts
import { useState, useEffect } from "react";
import axios from "axios";
import { Post } from "../Types/Post";

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3010/posts/");
        setPosts(response.data); 
        setLoading(false);
      } catch (err) {
        setError("Erro ao carregar os posts.");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const addPost = async (newPost: Omit<Post, "id">) => {
    try {
      console.log("Enviando JSON para API:", newPost);
  
      const response = await axios.post("http://localhost:3010/posts", newPost);
      setPosts((prevPosts) => [response.data, ...prevPosts]);
    } catch (err) {
      console.error("Erro ao adicionar um post:", err);
      setError("Erro ao adicionar um post.");
    }
  };
  

  return { posts, loading, error, addPost };
};
