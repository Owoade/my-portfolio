import React from 'react';
import './App.css';
import { Box } from "@chakra-ui/react"
import Header from "./components/Header"
import Wrapper from './components/Wrapper';
import  HeroSection from "./components/HeroSection"

function App() {
  return (
    <Box className="App">
      <Wrapper>
        <Box>
        <Header /> 
        <HeroSection />
        </Box>
      </Wrapper>
    </Box>
  );
}

export default App;
