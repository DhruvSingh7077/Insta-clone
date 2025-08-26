import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
//import LeftSidebar from './components/LeftSidebar';
import Feed from "./components/Feed";
import Login from "./components/Login";
import Register from "./components/Register";
//import RightSidebar from './components/RightSidebar';
import ProtectedRoute from "./components/ProtectedRoute";
import ProfilePage from "./pages/ProfilePage";
import MainLayout from "./components/MainLayout";
import CreatePost from "./pages/CreatePost";
import CreateAI from "./pages/CreateAI";
import MessagesPage from "./components/MessagesPage";
import SettingsPage from "./pages/SettingsPage";

//import SavedPage from "./pages/SavedPage";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        {/*  Mount CreatePost globally so modal works everywhere */}
        <CreatePost />
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

          {/* Saved → Redirect to Profile */}
          <Route path="/saved" element={<Navigate to="/profile" replace />} />

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
