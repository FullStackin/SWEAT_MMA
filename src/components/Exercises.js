import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";

const EXERCISES_PER_PAGE = 6;

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let { response, data } = [];

      if (bodyPart === "all") {
        ({ response, data } = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        ));
      } else {
        ({ response, data } = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        ));
      }

      console.log("API response:", response); // Log the response

      setExercises(data);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  const lastExerciseIndex = currentPage * EXERCISES_PER_PAGE;
  const firstExerciseIndex = lastExerciseIndex - EXERCISES_PER_PAGE;
  const currentExercises = Array.isArray(exercises)
    ? exercises.slice(firstExerciseIndex, lastExerciseIndex)
    : [];

  const handlePaginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  if (!currentExercises.length) {
    return <Loader />;
  }

  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {exercises.length > EXERCISES_PER_PAGE && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / EXERCISES_PER_PAGE)}
            page={currentPage}
            onChange={handlePaginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
