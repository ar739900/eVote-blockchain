import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  ListItem,
  Text,
  UnorderedList,
  useColorMode,
} from "@chakra-ui/react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "./Logo";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center" p={4}>
          <Link to={"/"}>
            <Logo />
          </Link>

          <Box>
            <UnorderedList
              display={"inline-flex"}
              alignItems={"center"}
              columnGap={4}
              listStyleType={"none"}
            >
              <ListItem>
                <Link to="/about">About</Link>
              </ListItem>
              <ListItem>
                <Link to="/contact">Contact</Link>
              </ListItem>
              <ListItem>
                <Link to={"/login"}>
                  <Button size={"md"} variant={"solid"}>
                    Login
                  </Button>
                </Link>
              </ListItem>
            </UnorderedList>

            <IconButton
              ml={4}
              onClick={toggleColorMode}
              icon={
                colorMode == "dark" ? (
                  <MdOutlineLightMode fontSize={24} />
                ) : (
                  <MdOutlineDarkMode fontSize={24} />
                )
              }
              backgroundColor={"transparent"}
              // _hover={{ backgroundColor: "#181818", color: "#A8A8A8" }}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
