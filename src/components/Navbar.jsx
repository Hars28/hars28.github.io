import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

const Choc = () => {
  const [showNavList,setShowNavList] = useState("")
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const toggleNavList = (id) =>{
    let element = document.getElementById(id);
    if(element){
      element.scrollIntoView()
    }
    setShowNavList(id)
  }
  return (
    <div style={{left:0,backgroundColor:"white",zIndex:1000, top:0, position:"sticky"}}>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              
              <VisuallyHidden>Harsh Singh</VisuallyHidden>
            </chakra.a>
            <Link to="/">
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
            Harsh Singh
            </chakra.h1>
            </Link>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <a href="#home" onClick={()=>toggleNavList("#home")} style={{textDecoration:"none"}}><Button variant="ghost">Home</Button></a>
              <a href="#home" onClick={()=>toggleNavList("#skills")} style={{textDecoration:"none"}}><Button variant="ghost">Skills</Button></a>
              <a href="#home" onClick={()=>toggleNavList("#projects")} style={{textDecoration:"none"}}><Button variant="ghost">Projects</Button></a>
              <a href="#home" onClick={()=>toggleNavList("#contacts")} style={{textDecoration:"none"}}><Button variant="ghost">Contact</Button></a>

            </HStack>
           
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

              <a href="#home" onClick={()=>{toggleNavList("#home");mobileNav.onClose()}} style={showNavList==="#home"?{textDecoration:"underline",color:"blue"}:{textDecoration:""}}><Button variant="ghost">Home</Button></a>
              <a href="#skills" onClick={()=>{toggleNavList("#skills");mobileNav.onClose()}} style={showNavList==="#home"?{textDecoration:"underline",color:"blue"}:{textDecoration:""}}><Button variant="ghost">Skills</Button></a>
              <a href="#projects" onClick={()=>{toggleNavList("#projects");mobileNav.onClose()}} style={showNavList==="#home"?{textDecoration:"underline",color:"blue"}:{textDecoration:""}}><Button variant="ghost">Projects</Button></a>
              <a href="#contacts" onClick={()=>{toggleNavList("#contacts");mobileNav.onClose()}} style={showNavList==="#home"?{textDecoration:"underline",color:"blue"}:{textDecoration:""}}><Button variant="ghost">Contact</Button></a>

               
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
      </div>
  );
};
export default Choc;