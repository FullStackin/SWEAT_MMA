import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
    position="relative"
    p="20px"
  >
   <Typography
  color="#FF2625"
  fontWeight="600"
  fontSize="35px"
  style={{ textShadow: "0 0 20px #000000" }}
>
  S.W.E.A.T MMA
</Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      mb="23px"
      mt="30px"
    >
      Strike With Evolved <br />
      & Advanced Technique
    </Typography>
    <Typography fontSize="22px" fontFamily="Gloock" lineHeight="35px">
      Join us today to learn the foundations of <br />
      proper exercise and martial arts.
    </Typography>
    <Stack>
      <a
        href="#exercises"
        style={{
          marginTop: "45px",
          textDecoration: "none",
          width: "200px",
          textAlign: "center",
          background: "#FF2625",
          padding: "12px",
          fontSize: "25px",
          textTransform: "none",
          color: "black",
          borderRadius: "4px",
        }}
      >
        Lets Workout!
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color="#b8860b"
      sx={{
        opacity: "0.1",
        display: { lg: "block", xs: "none" },
        mt: "25px",
        fontSize: "200px",
      }}
    >
      Get After It!
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
