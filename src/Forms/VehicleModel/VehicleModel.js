import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

function VehicleModel(props) {  
  const [vehicleModel, setVehicleModels] = useState([]);
  useEffect(() => {
    fetch("https://octalogic-test-frontend.vercel.app/api/v1/vehicleTypes")
      .then((response) => response.json())
      .then((data) => {
        let VehileModels = [];
        data.data.forEach((e) => {
          if (e.type == props.fdata.vehicleType) {
            VehileModels.push(...e.vehicles);
          }
        });
        setVehicleModels(VehileModels);
      });
  }, []);

  const userData = (data) => {
    props.onSet({
      modelId: data,
    });
  };

  return (
    <>
      <FormControl>
        <RadioGroup
          name="vehicle-model-buttons-group"
          onChange={(e) => userData(e.target.value)}
        >
          {vehicleModel.map((x) => (
            <FormControlLabel
              key={x.id}
              value={x.id}
              control={<Radio />}
              label={x.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default VehicleModel;
