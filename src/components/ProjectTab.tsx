import { HStack, chakra, Flex } from "@chakra-ui/react";

import { useState, useContext } from "react"
import { PortfolioTabContext } from "../contexts/PortfolioTabContext";

const projectVariants = [ "Frontend", "Fullstack", "Backend" ] as const;

export type TPprojects = typeof projectVariants[number]
 
type Props = {
    activeTab: TPprojects
}

const activeTabStyle = {
    backgroundColor: "black",
    color: "white",
    padding:"8px",
    borderRadius: "8px"
}

function ProjectTab() {
  const { active, setActive } = useContext(PortfolioTabContext);
  
  return (
    <Flex width={"300px"} justifyContent={"space-between"} margin="2em auto">
      {
        projectVariants.map( variant => <chakra.span onClick={()=> setActive(variant)} cursor={"pointer"} style={variant === active ? {...activeTabStyle} : { transform: "translateY(.6em)"}}  >{ variant }</chakra.span>)
      }
    </Flex>
  )
}

export default ProjectTab