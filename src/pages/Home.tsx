import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Wrapper from "../components/Wrapper";


function Home() {
  return (
    <Wrapper>
      <Box>
        <Header />
        <HeroSection />
      </Box>
    </Wrapper>
  );
}

export default Home