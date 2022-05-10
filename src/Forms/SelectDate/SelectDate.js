import React, { useState, useEffect } from "react";
import DatePicker from "react-date-picker";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function SelectDate(props) {
  const [bookedDates, setBookedDates] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  useEffect(() => {
    fetch(
      `https://octalogic-test-frontend.vercel.app/api/v1/bookings/${props.fdata.modelId}`
    )
      .then((response) => response.json())
      .then((data) => {
        let tempDate = [];
        data.data.forEach((e) => {
          tempDate.push({ start: e.startDate, end: e.endDate });
        });
        setBookedDates(tempDate);
      });
  }, []);

  const userData = () => {
    props.onFinish({
      start: startDate,
      end: endDate,
    });
  };

  return (
    <>
      <Typography variant="h7" component="div">
        Start Date
      </Typography>
      <DatePicker onChange={setStartDate} value={startDate} />
      <Typography variant="h7" component="div">
        End Date
      </Typography>
      <DatePicker onChange={setEndDate} value={endDate} />
      <Button onClick={userData} variant="contained">
        Submit
      </Button>
    </>
  );
}
