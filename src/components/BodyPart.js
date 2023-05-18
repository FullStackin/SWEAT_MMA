import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={
      bodyPart === item
        ? {
            borderTop: "4px solid #FF2625",
            background: "#fff",
            borderBottomLeftRadius: "10px",
            width: "260px",
            height: "280px",
            cursor: "pointer",
            gap: "20px",
          }
        : {
            background: "#fff",
            borderBottomLeftRadius: "10px",
            width: "260px",
            height: "280px",
            cursor: "pointer",
            gap: "20px",
          }
    }
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: "120px", height: "120px" }} />
    <Typography
      fontSize="25px"
      fontWeight="bold"
      fontFamily="Gloock"
      color="#3A1212"
      textTransform="uppercase"
    >
      {" "}
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
