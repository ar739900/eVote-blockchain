import React from "react";
import Hero from "../src/components/Hero";
import { Flex } from "@chakra-ui/react";
import MemosTable from "../src/components/MemosTable";

function Home(props) {
  return (
    <>
      <Hero />

      <Flex
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        mt={10}
        my={8}
      >
        <MemosTable />
      </Flex>
    </>
  );
}

export default Home;
