// src/App.tsx
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/Main/MainContent";
import AddPost from "./Pages/AddPost/AddPost";
import PostList from "./Pages/PostList/PostList";

const App: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <MainContent>
        <AddPost />
        <PostList />
      </MainContent>
      <Footer />
    </div>
  );
};

export default App;
