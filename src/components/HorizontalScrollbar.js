import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";

import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => scrollPrev()}
      style={{
        position: "absolute",
        left: "10px",
        top: "1%",
        transform: "translateY(-60%)",
        zIndex: 1,
        cursor: "pointer",
      }}
    >
      <img
        src={LeftArrowIcon}
        alt="left-arrow"
        style={{
          filter: "drop-shadow(0px 0px 2px black)",
          color: "black",
        }}
      />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => scrollNext()}
      style={{
        position: "absolute",
        right: "10px",
        top: "1%",
        transform: "translateY(-60%)",
        zIndex: 1,
        cursor: "pointer",
      }}
    >
      <img
        src={RightArrowIcon}
        alt="right-arrow"
        style={{
          filter: "drop-shadow(0px 0px 2px black)",
          color: "black",
        }}
      />
    </Typography>
  );
};


const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 45px"
      >
        {bodyParts ? (
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        ) : (
          <ExerciseCard exercise={item} />
        )}
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;
