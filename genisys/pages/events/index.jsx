import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeInUp from "../../components/Anim/FadeInUp";
import Timeline from "../../components/Timeline";
import { Box } from "@chakra-ui/react";

const Events = () => {
  return (
    <Box>
      <Navbar />
      <FadeInUp>
        <Timeline />
      </FadeInUp>

      <Footer />
    </Box>
  );
};

export default Events;
