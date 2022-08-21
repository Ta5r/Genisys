import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Spacer,
  Text,
  Icon,
  Collapse,
  ChakraProvider,
  theme,
} from "@chakra-ui/react";
import { MdMenu, MdClose } from "react-icons/md";
import NextLink from "next/link";

import NavLink from "./NavLink";

const NavLinks = ({ closeMenu }) => (
  <>
    <NavLink to="/" onClick={closeMenu}>
      <Text
        fontSize={["md", "md", "md", "md", "md"]}
        p={"4"}
        pt={"8"}
        border={"1px solid black"}
        letterSpacing={8.0}
        backgroundColor={"#fff"}
        px={"3rem"}
        color={"black"}
        _hover={{
          background: "white",
          color: "teal.500",
        }}
      >
        HOME
      </Text>
    </NavLink>
    <NavLink to="/events" onClick={closeMenu}>
      <Text
        fontSize={["md", "md", "md", "md", "md"]}
        p={"4"}
        pt={"8"}
        border={"1px solid black"}
        backgroundColor={"#fff"}
        px={"3rem"}
        letterSpacing={8.0}
        color={"black"}
        _hover={{
          background: "white",
          color: "teal.500",
        }}
      >
        EVENTS
      </Text>
    </NavLink>
    <NavLink to="/sponsors" onClick={closeMenu}>
      <Text
        fontSize={["md", "md", "md", "md", "md"]}
        p={"4"}
        pt={"8"}
        border={"1px solid black"}
        backgroundColor={"#fff"}
        px={"3rem"}
        letterSpacing={8.0}
        color={"black"}
        _hover={{
          background: "white",
          color: "teal.500",
        }}
      >
        SPONSORS
      </Text>
    </NavLink>
    <NavLink to="/team" onClick={closeMenu}>
      <Text
        fontSize={["md", "md", "md", "md", "md"]}
        p={"4"}
        pt={"8"}
        border={"1px solid black"}
        backgroundColor={"#fff"}
        px={"3rem"}
        letterSpacing={8.0}
        color={"black"}
        _hover={{
          background: "white",
          color: "teal.500",
        }}
      >
        TEAM
      </Text>
    </NavLink>
    <NavLink to="/register" onClick={closeMenu}>
      <Text
        p={"4"}
        pt={"8"}
        border={"1px solid black"}
        backgroundColor={"#fff"}
        px={"3rem"}
        letterSpacing={8.0}
        color={"black"}
        _hover={{
          background: "white",
          color: "teal.500",
        }}
      >
        REGISTER
      </Text>
    </NavLink>
  </>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider theme={theme}>
      <Box
        position={"fixed"}
        w={"100vw"}
        css={{ backdropFilter: "blur(8px)" }}
        zIndex={"1"}
        pb={5}
      >
        <Flex
          h={16}
          align="space-between"
          // bgColor={"gray.900"}
          // with bgColor NO glass-morphism effect
        >
          <NextLink href="/" passHref>
            <Text
              // fontSize={"28px"}
              fontSize={["lg", "xl", "2xl", "3xl", "4xl"]}
              fontWeight={"800"}
              p={"4"}
              pb={"6vh"}
              letterSpacing={8.0}
              color={"white"}
              bgColor={"gray.900"}
              size={"md"}
              cursor={"pointer"}
            >
              GENESIS
            </Text>
          </NextLink>
          <Spacer />
          <HStack as="nav" spacing={4} display={{ base: "none", xl: "flex" }}>
            <NavLinks />
          </HStack>
          <Spacer />
          <Spacer />
          <IconButton
            bgColor={"gray.900"}
            variant="ghost"
            color="white"
            borderRadius="0"
            p={"4"}
            pb={"6vh"}
            size="lg"
            icon={
              isOpen ? (
                <Icon as={MdClose} fontSize={"4xl"} color={"white"} />
              ) : (
                <Icon as={MdMenu} fontSize={"4xl"} color={"white"} />
              )
            }
            aria-label="Open Menu"
            display={{ xl: "none" }}
            onClick={isOpen ? onClose : onOpen}
            _hover={{
              border: "none",
              textDecoration: "none",
              borderRadius: "50",
            }}
            _active={{
              bgColor: "transparent",
            }}
            _focus={{
              shadow: "none",
              border: "none",
            }}
          />
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <Box
            p={4}
            bgColor="brand.700"
            width="100%"
            height="calc(100vh - 40px)"
            display={{ xl: "none" }}
          >
            <Stack
              as="nav"
              spacing={10}
              alignItems="center"
              justify="center"
              height="85%"
            >
              <NavLinks closeMenu={onClose} />
            </Stack>
          </Box>
        </Collapse>
      </Box>
    </ChakraProvider>
  );
};

export default Navbar;
