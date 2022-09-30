import { Box, Button, Flex, Spacer, chakra } from "@chakra-ui/react"

function Header() {
  return (
    <Flex my={5}>
        <Box fontSize={{xs:"30px", base: "25px"}}  fontFamily={"Sacramento, cursive"} fontWeight="extrabold">
            Owoade Anu<chakra.span display={{xs:"inline-block", base: "none"}} fontSize={{xs:"30px", base: "25px"}} fontFamily={"Sacramento, cursive"}>oluwapo</chakra.span>
        </Box>
        <Spacer />
        <Button variant="primary">
            Resume
        </Button>
    </Flex>
  )
}

export default Header