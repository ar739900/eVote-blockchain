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
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center" p={4}>
          <Link to={"/"}>
            <Button
              fontWeight="700"
              variant={"outline"}
              color={"#181818"}
              border={"2px solid #181818"}
              boxShadow={"4px 4px #181818"}
              _hover={{
                opacity: "0.9",
                boxShadow: "none",
              }}
              _dark={{
                color: "#f3f2f2",
                border: "2px solid #f2f2f2",
                boxShadow: "4px 4px #f2f2f2",
                _hover: {
                  boxShadow: "none",
                },
              }}
            >
              TrustBallot
            </Button>
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
