import React from 'react';
import './App.css';
import { Box } from "@chakra-ui/react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from "./pages/Portfolio"

function App() {
  return (
    <Box className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
     </BrowserRouter>
    </Box>
  );
}

export default App;
