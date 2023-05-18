import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/SweatMMA.jpg";

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: "123px", xs: "40px" },
      mt: { sm: "32px", xs: "20px" },
      justifyContent: "none",
    }}
    px="20px"
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{
          width: "70px",
          height: "70px",
          margin: "0px 2px",
          borderRadius: "50px",
        }}
      />
    </Link>
    <Stack
      direction="row"
      gap="25px"
      fontFamily="Crimson Text"
      fontSize="30px"
      alignItems="flex-end"
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#3A1212",
          borderBottom: "3px solid #FF2625",
        }}
      >
        Home
      </Link>
      <a
        href="#exercises"
        style={{
          textDecoration: "none",
          color: "#3A1212",
          borderBottom: "3px solid #FF2625",
        }}
      >
        Movements
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
