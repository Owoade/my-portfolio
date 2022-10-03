import { Box, Button, Flex, Spacer, chakra } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <Flex my={5}>
        <Box fontSize={{xs:"30px", base: "25px"}} cursor="pointer" onClick={ ()=> navigate("/")}  fontFamily={"Sacramento, cursive"} fontWeight="extrabold">
            Owoade Anu<chakra.span display={{xs:"inline-block", base: "none"}} fontSize={{xs:"30px", base: "25px"}} fontFamily={"Sacramento, cursive"}>oluwapo</chakra.span>
        </Box>
        <Spacer />
        <Button variant="primary" as="a" href="https://drive.google.com/file/d/1SXo_WOtyctA7ApmnF6--j0cs24bYMVT2/view?usp=sharing" target={"_blank"}>
            Resume
        </Button>
    </Flex>
  )
}

export default Header