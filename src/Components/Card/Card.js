import React from "react";
import classes from "./Card.module.css";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <Stack
        padding={5}
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h5" component="div">
          {props.question}
        </Typography>

        {props.children}
      </Stack>
    </div>
  );
};

export default Card;
