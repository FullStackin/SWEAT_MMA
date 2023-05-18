import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/SweatMMA.jpg";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = () => (
  <Box mt="45px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img
        src={Logo}
        alt="logo"
        style={{ width: "100px", height: "100px", borderRadius: "30%" }}
      />
    </Stack>
    <Stack
      direction="column"
      alignItems="center"
      spacing={2}
      mt="20px"
      textAlign="center"
      pb="40px"
    >
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      >
        Made by Omar El Sahlah @TallTechTitan
      </Typography>
      {/* Stack component for social media icons */}
      <Stack direction="row" alignItems="center" spacing={2}>
        {/* GitHub icon and link */}
        <a href="https://github.com/FullStackin">
          <GitHubIcon />
        </a>

        {/* LinkedIn icon and link */}
        <a href="https://www.linkedin.com/in/omarelsahlah/">
          <LinkedInIcon />
        </a>

        {/* Twitter icon and link */}
        <a href="https://twitter.com/@talltechtitan">
          <TwitterIcon />
        </a>
      </Stack>
    </Stack>
  </Box>
);

export default Footer;
