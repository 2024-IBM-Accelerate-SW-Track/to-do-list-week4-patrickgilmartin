import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const AddTodo = ({ addTodo }) => {
  const [content, setContent] = useState("");
  const [due, setDue] = useState(null);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleDateChange = (date) => {
    setDue(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (content.trim() && due) {
      addTodo({
        content,
        due: new Date(due).toLocaleDateString(),
      });
      setContent("");
      setDue(null);
    }
  };

  return (
    <div>
      <TextField
        label="Add New Item"
        variant="outlined"
        onChange={handleContentChange}
        value={content}
        inputProps={{ "data-testid": "new-item-textfield" }}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Due Date"
          value={due}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} placeholder="MM/DD/YYYY" />}
        />
      </LocalizationProvider>
      <Button
        style={{ marginLeft: "10px" }}
        onClick={handleSubmit}
        variant="contained"
        color="primary"
        data-testid="new-item-button"
      >
        Add
      </Button>
    </div>
  );
};

export default AddTodo;
