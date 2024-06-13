import React from 'react'
import LoginPage from './pages/loginPage/LoginPage.jsx';
import Sigupage from './pages/signupPage/SignupPage.jsx'
import Homepage from './pages/homePage/HomePage.jsx';
import PdfViewerpage from './pages/pdfViewerPage/PdfViewerPage.jsx';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './actions/context/Context.js';

function App() {
  const {user} = useContext(Context);
  return (
    <BrowserRouter>
      <Routes>
      {!user && <Route path="/" element={<Navigate to="/login" replace />} />}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Sigupage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/pdfViewer" element={<PdfViewerpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

