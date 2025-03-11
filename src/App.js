import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { LandingPage } from "./Pages/LandingPage";
import { Login } from "./Pages/Login";
import { ForgetPassword } from "./Pages/ForgetPassword";
import { Dashboard } from "./Pages/Dashboard";
import { UserDashboard } from "./Pages/UserDashboard";
import { ProfilePage } from "./Pages/ProfilePage";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

// Custom hook for accessing context
export const useGlobalContext = () => useContext(GlobalContext);

function ProtectedRoute({ children }) {
  const { token } = useGlobalContext();
  return token ? children : <Navigate to="/login" replace />;
}

function AuthRoute({ children }) {
  const { token } = useGlobalContext();
  return token ? <Navigate to="/dashboard" replace /> : children;
}

function App() {
  let [url, setUrl] = useState("http://127.0.0.1:8000");
  let [token, setToken] = useState(localStorage.getItem("token") || null);

  return (
    <GlobalContext.Provider value={{ url, setUrl, token, setToken }}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/profile/:id" element={<ProfilePage />} />

            <Route
              path="/login"
              element={
                <AuthRoute>
                  <Login />
                </AuthRoute>
              }
            />
            <Route
              path="/forget-password"
              element={
                <AuthRoute>
                  <ForgetPassword />
                </AuthRoute>
              }
            />
            <Route path="/dashboard-page" element={<UserDashboard />} />
          </Routes>
        </div>
      </Router>
    </GlobalContext.Provider>
  );
}

export default App;
