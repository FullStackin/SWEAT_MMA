import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchBodyPartsData = async () => {
      try {
        const bodyPartsData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          exerciseOptions
        );

        if (Array.isArray(bodyPartsData)) {
          setBodyParts(["all", ...bodyPartsData]);
        }
      } catch (error) {
        console.error("Error fetching body part data:", error);
      }
    };

    fetchBodyPartsData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      try {
        const exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );

        const searchedExercises = exercisesData.filter(
          (item) =>
            item.name.toLowerCase().includes(search) ||
            item.target.toLowerCase().includes(search) ||
            item.equipment.toLowerCase().includes(search) ||
            item.bodyPart.toLowerCase().includes(search)
        );

        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

        setSearch("");
        setExercises(searchedExercises);
      } catch (error) {
        console.error("Error fetching exercises data:", error);
      }
    }
  };

  const handleFetchBodyPartData = async () => {
    try {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      if (Array.isArray(bodyPartsData)) {
        setBodyParts(["all", ...bodyPartsData]);
      }
    } catch (error) {
      console.error("Error fetching body part data:", error);
    }
  };

  const handleBodyPartClick = (part) => {
    setBodyPart(part);
    handleFetchBodyPartData();
  };

  return (
    <Stack alignItems="center" mt="10px" justifyContent="center" p="2px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="20px"
        textAlign="center"
      >
        Dynamic workouts to <br />
        challenge your body and mind.
      </Typography>
      <Box position="relative" mb="45px">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          setBodyPart={handleBodyPartClick}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
