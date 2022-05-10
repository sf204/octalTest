import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

function VehicleWheel(props) {
  const [wheelTypes, setwheelTypes] = useState([]);
  useEffect(() => {
    fetch("https://octalogic-test-frontend.vercel.app/api/v1/vehicleTypes")
      .then((response) => response.json())
      .then((data) => {
        let types = [];
        data.data.forEach((element) => {
          types.indexOf(element.wheels) === -1
            ? types.push(element.wheels)
            : console.log("This item already exists");
        });
        setwheelTypes(types);
      });
  }, []);

  const userData = (data) => {
    props.onSet({
      wheelNumber: data,
    });
  };

  return (
    <>
      <FormControl>
        <RadioGroup
          name="vehicle-wheel-buttons-group"
          value={wheelTypes[0]}
          onChange={(e) => userData(e.target.value)}
        >
          {wheelTypes.map((x) => (
            <FormControlLabel key={x} value={x} control={<Radio />} label={x} />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default VehicleWheel;
