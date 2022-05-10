import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

function VehicleType(props) {  
  const [vehicleTypes, setvehicleTypes] = useState([]);
  useEffect(() => {
    fetch("https://octalogic-test-frontend.vercel.app/api/v1/vehicleTypes")
      .then((response) => response.json())
      .then((data) => {
        const result = data.data.filter(
          (x) => x.wheels == props.fdata.wheelNumber
        );
        setvehicleTypes(result);
      });
  }, []);

  const userData = (data) => {
    props.onSet({
      vehicleType: data,
    });
  };

  return (
    <>
      <FormControl>
        <RadioGroup
          name="vehicle-type-buttons-group"
          onChange={(e) => userData(e.target.value)}
        >
          {vehicleTypes.map((x) => (
            <FormControlLabel
              key={x.type}
              value={x.type}
              control={<Radio />}
              label={x.type}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default VehicleType;
