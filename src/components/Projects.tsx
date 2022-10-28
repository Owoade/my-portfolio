import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Text,
  chakra,
} from "@chakra-ui/react";
import { RiGithubFill, RiLinksLine } from "react-icons/ri";
import projects from "../data/projects";
import { TPprojects } from "./ProjectTab";
import { useContext } from "react";
import { PortfolioTabContext } from "../contexts/PortfolioTabContext";
import { useNavigate } from "react-router-dom";

function Projects() {
  const { active } = useContext(PortfolioTabContext);
  const filteredProjects = projects.filter(
    (project) => project.category === active
  );
  const navigate = useNavigate();
  return (
    <Box>
      <Grid
        width={{ lg: "100%", base: "fit-content" }}
        gap={6}
        gridTemplateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(1, 1fr)" }}
        margin={{ lg: "3em 0", base: "3em auto" }}
      >
        {filteredProjects.map((project) => (
          <Project project={project} />
        ))}
      </Grid>
      <HStack
        margin={"1em auto"}
        display={{ xs: "flex", base: "block" }}
        textAlign="center"
        width={{ xs: "fit-content", base: "100%" }}
        transform={{ sm: "translateY(2em)", base: "translateY(.5em)" }}
      >
        <Text margin="1em 0">You like what you see 😀?</Text>
        <Button
          className="main-cta"
          as={"a"}
          target={"_blank"}
          href="mailto:owoadeanuoluwapo2@gmail.com"
          variant={"primary"}
        >
          {" "}
          Tell me about it 📧
        </Button>
      </HStack>
    </Box>
  );
}

function Project({ project }: { project: IProject }) {
  return (
    <Box
      width={{lg:"300px", base: "290px"}}
      border="1px solid whitesmoke"
      borderRadius={"8px"}
      boxShadow="0px 4px 25px rgba(197, 197, 197, 0.15);"
      mt={ project.name === "Template generator" ? { lg: "2em", base: "0" } : 0 }
    >
      <Image width="100%" src={project.image} />
      <Box className="project__desc" textAlign={"center"}>
        <Text fontWeight={"extrabold"} mt={3}>
          {project.name}
        </Text>
        <Text color="grey" my={3}>
          {project.desc}
        </Text>
        <HStack fontSize={"20px"} width="fit-content" margin="1em auto">
          {project.links?.live && (
            <a
              href={project.links?.live}
              target={"blank"}
              style={{ display: "flex", textDecoration: "underline" }}
            >
              <chakra.span
                display={"inline-block"}
                fontSize="13px"
                color={"grey"}
              >
                Live
              </chakra.span>
              <RiLinksLine display={"block"} />
            </a>
          )}
          {project.links?.github && (
            <a
              href={project.links?.github}
              target={"blank"}
              style={{ display: "flex", textDecoration: "underline" }}
            >
              <chakra.span
                display={"inline-block"}
                fontSize="13px"
                color={"grey"}
              >
                Source
              </chakra.span>
              <RiGithubFill display={"block"} />
            </a>
          )}
        </HStack>
        <HStack width={"fit-content"} margin="1em auto">
          {project.technologies.map((tech) => (
            <Image width="30px" src={tech} />
          ))}
        </HStack>
      </Box>
    </Box>
  );
}

export default Projects;
