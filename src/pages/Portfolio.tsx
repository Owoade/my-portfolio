import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import ProjectTab from "../components/ProjectTab";
import PortfolioTabContextProvider from "../contexts/PortfolioTabContext";
import Projects from "../components/Projects";

function Portfolio() {
  return (
    <Wrapper>
      <Box>
        <Header />
        <PortfolioTabContextProvider>
          <Box>
            <ProjectTab />
            <Projects />
          </Box>
         
        </PortfolioTabContextProvider>
      </Box>
    </Wrapper>
  );
}

export default Portfolio;
