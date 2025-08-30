// src/App.js
import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Feed from "./components/Feed";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import ProfilePage from "./pages/ProfilePage";
import MainLayout from "./components/MainLayout";
import CreatePost from "./pages/CreatePost";
import CreateAI from "./pages/CreateAI";
import MessagesPage from "./components/MessagesPage";
import SettingsPage from "./pages/SettingsPage";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  // 🔹 Shared posts state
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Load posts from localStorage on first render
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);

  // Save posts to localStorage whenever they change
  useEffect(() => {
    console.log("Posts updated:", posts);
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  // Function to add a new post
  const handleAddPost = (newPost) => {
    const postWithUser = {
      id: Date.now(), // unique ID
      ...newPost, // already contains userId, caption, imageUrl, etc.
    };

    console.log("Adding new post:", postWithUser);

    setPosts((prevPosts) => {
      const updatedPosts = [postWithUser, ...prevPosts];
      localStorage.setItem("posts", JSON.stringify(updatedPosts)); // ✅ persist immediately
      return updatedPosts;
    });
  };

  return (
    <ThemeProvider>
      <Router>
        {/* 🔹 Mount CreatePost globally so it's available everywhere */}
        <CreatePost
          showModal={showModal}
          setShowModal={setShowModal}
          onPost={handleAddPost}
        />
        <Routes>
          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Register */}
          <Route path="/register" element={<Register />} />

          {/* Home / Feed */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Feed posts={posts} />
                </MainLayout>
              </ProtectedRoute>
            }
          />

          {/* Profile */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <MainLayout>
                  {/* 🔹 Pass setShowModal so + New button can open CreatePost */}
                  <ProfilePage posts={posts} setShowModal={setShowModal} />
                </MainLayout>
              </ProtectedRoute>
            }
          />

          {/* Saved → Redirect to Profile */}
          <Route path="/saved" element={<Navigate to="/profile" replace />} />

          {/* Create AI Post */}
          <Route
            path="/create/ai"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <CreateAI />
                </MainLayout>
              </ProtectedRoute>
            }
          />

          {/* Messages */}
          <Route
            path="/messages"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <MessagesPage />
                </MainLayout>
              </ProtectedRoute>
            }
          />

          {/* Settings */}
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <SettingsPage />
                </MainLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
