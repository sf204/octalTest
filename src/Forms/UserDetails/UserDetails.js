import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const UserDetails = (props) => {
  const user_first_name = useRef();
  const user_last_name = useRef();

  const userData = () => {
    let fName = user_first_name.current.value;
    let lName=  user_last_name.current.value;
    if (fName == "" || lName == "") {
      alert("filled cant be empty !");
      return false;
    }
    props.onSet({
      first_name: fName,
      last_name: lName,
    });
  };
  return (
    <>
      <TextField
        inputRef={user_first_name}
        id="first-name"
        label="First Name"
        variant="standard"
      />
      <TextField
        inputRef={user_last_name}
        id="last-name"
        label="Last Name"
        variant="standard"
      />
      <Button onClick={userData} variant="contained">
        Next
      </Button>
    </>
  );
};

export default UserDetails;
