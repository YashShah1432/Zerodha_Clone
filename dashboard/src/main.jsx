import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import axios from "axios";
import GeneralContext, { GeneralContextProvider } from "./components/GeneralContext";

const ProtectedRoute = ({ children }) => {
  const { setUser } = useContext(GeneralContext);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:3000/verify",
          {},
          { withCredentials: true }
        );
        
        if (!data.status) {
          window.location.href = 'http://localhost:5173/login';
        } else {
          setUser(data.user);
        }
      } catch (error) {
        window.location.href = 'http://localhost:5173/login';
      }
    };
    
    verifyAuth();
  }, [setUser]);

  return children;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GeneralContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={ 
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </GeneralContextProvider>
  </React.StrictMode>
);