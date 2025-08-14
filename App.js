
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import LeftSidebar from './components/LeftSidebar';
import Feed from './components/Feed';
import Login from "./components/Login";
import Register from "./components/Register";
//import RightSidebar from './components/RightSidebar';
import ProtectedRoute from './components/ProtectedRoute';
import ProfilePage from './pages/ProfilePage';
import MainLayout from './components/MainLayout';
import CreatePost from "./pages/CreatePost";
import CreateAI from "./pages/CreateAI";
import MessagesPage from "./components/MessagesPage";


function App() {
  return (
        <Router>
      <Routes>
        {/* Route for Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Route for Register Page */}
        <Route path="/register" element={<Register />} />

  {/* Home Route (Feed + Layout) */}
        <Route
          path="/"
          element={
               <ProtectedRoute>
      <MainLayout>
                <Feed />
              </MainLayout>
       </ProtectedRoute>
    }
    />

        {/* ✅ Profile Page Route */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <MainLayout>
                <ProfilePage />
              </MainLayout>
            </ProtectedRoute>
          }
        />

         {/* Create Post Route */}
        <Route
          path="/create/post"
          element={
            <ProtectedRoute>
              <MainLayout>
                <CreatePost />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Create AI Post Route */}
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

 {/*  Messages Page */}
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


    </Routes>
    </Router>
  );
}

export default App;
