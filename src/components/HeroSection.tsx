import { Box, Button, Heading, HStack, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { RiTwitterFill, RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri"

function HeroSection() {
  return (
    <Box textAlign={"center"} my={10} >

        <Heading as="h2" fontFamily="">
            Hi, I'm Anuoluwapo😎
        </Heading>

        <Text width={{sm:"600px", base:"fit-content"}} margin="1em auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro nostrum ipsam esse iure quaerat provident pariatur quos sunt laboriosam consectetur.
        </Text>

        <HStack fontSize={{xs:"50px", base:"25px"}} width={{xs:"280px", base:"180px"}} margin="0 auto">
            <a href="https://twitter.com/Owoade_" target={"blank"}>
             <RiTwitterFill display={"block"} />
            </a>
            <Spacer />
            <a href="https://www.linkedin.com/in/owoade-anuoluwapo-a09a03235?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZGduMSecRgqYrJnRpimadg%3D%3D" target={"blank"}>
              <RiLinkedinBoxFill display={"block"} />
            </a>
            <Spacer />
            <a href="https://github.com/Owoade" target={"blank"}>
              <RiGithubFill display={"block"} />
            </a>
        </HStack>

        <Image margin={"2em auto"} width={{xs:"300px", base:"220px"}} clipPath={"circle(41% at 50% 50%)"} src="https://res.cloudinary.com/dles2mycv/image/upload/v1664575318/IMG-20220901-WA0009-graysclale_xh2xya.jpg" />

        <HStack margin={"1em auto"} display={{xs:"flex", base:"block"}}  width={{xs:"fit-content", base:"100%"}} transform={{sm:"translateY(2em)", base:"translateY(.5em)"}}>
            <Text margin="1em 0" >Wanna see what I'm capable of? </Text>
            <Button className='main-cta' variant={"primary"}> View Portfolio 🔥</Button>
        </HStack>
    </Box>
  )
}

export default HeroSection