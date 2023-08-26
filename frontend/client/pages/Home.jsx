import React from "react";
import Hero from "../src/components/Hero";
import { Flex } from "@chakra-ui/react";
import MemosTable from "../src/components/MemosTable";
import HeroCTA from "../src/components/HeroCTA";

function Home(props) {
  return (
    <>
      <HeroCTA />

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
