import Background from "./Components/Background/Background";
import Card from "./Components/Card/Card";
import SelectDate from "./Forms/SelectDate/SelectDate";
import UserDetails from "./Forms/UserDetails/UserDetails";
import VehicleModel from "./Forms/VehicleModel/VehicleModel";
import VehicleType from "./Forms/VehicleType/VehicleType";

import { useState } from "react";
import VehicleWheel from "./Forms/VehicleWheel/VehicleWheel";

let formData = {};
function App() {
  const Questions = [
    "User Details",
    "Number of Wheels",
    "Vehicle Type",
    "Vehicle Model",
    "Select Date",
  ];

  const [count, setCount] = useState(0);

  const [form, setForm] = useState({});

  const setData = (data) => {
    formData = { ...formData, ...data };
    setCount((prev) => prev + 1);
  };

  const onSubmit = (data) => {
    formData = { ...formData, ...data };
    setForm(formData);
    console.log("SUBMIT !");
    console.log(formData);
    alert(JSON.stringify(formData));
  };

  return (
    <Background>
      <Card question={Questions[count]}>
        {(() => {
          switch (count) {
            case 0:
              return <UserDetails fdata={formData} onSet={setData} />;
            case 1:
              return <VehicleWheel fdata={formData} onSet={setData} />;
            case 2:
              return <VehicleType fdata={formData} onSet={setData} />;
            case 3:
              return <VehicleModel fdata={formData} onSet={setData} />;
            case 4:
              return <SelectDate fdata={formData} onFinish={onSubmit} />;
            default:
              return null;
          }
        })()}
      </Card>
    </Background>
  );
}

export default App;
