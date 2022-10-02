import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { RiGithubFill, RiLinksLine } from "react-icons/ri";

interface IProject {
    name: string;
    desc: string;
    links:{
        github: string;
        live: string;
    };
    technologies: string[]
}

function Projects() {
  return (
    <Box width={"300px"} border="1px solid whitesmoke" borderRadius={"8px"}>
      <Image
        width="100%"
        src="https://res.cloudinary.com/dles2mycv/image/upload/v1664726643/Group_1_f6uybj.png"
      />
      <Box
        className="project__desc"
        textAlign={"center"}
      >
        <Text fontWeight={"extrabold"} mt={3}>
          Localbase
        </Text>
        <Text color="grey" my={3}>
          A club management application
        </Text>
        <HStack fontSize={"20px"} width="50px" margin="0 auto">
          <RiLinksLine display={"block"} />
          <RiGithubFill display={"block"} />
        </HStack>
        <HStack width={"fit-content"} margin="1em auto">
            <Image width="30px" src="https://res.cloudinary.com/dles2mycv/image/upload/v1664730392/chakra_ui_1_nkslja.png" />
            <Image width="30px" src="https://res.cloudinary.com/dles2mycv/image/upload/v1664730391/ts_js_1_ielib3.png" />
            <Image width="30px" src="https://res.cloudinary.com/dles2mycv/image/upload/v1664730391/react-1024x1024_1_n1jskz.png" />
            <Image width="30px" src="https://res.cloudinary.com/dles2mycv/image/upload/v1664730391/firebase_1_zz5ha6.png" />
        </HStack>
      </Box>
    </Box>
  );
}

function Project(){

}

export default Projects;
