import React, { Component } from "react";
import { Button, TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      due: null,
    };
  }

  handleContentChange = (event) => {
    this.setState({
      content: event.target.value,
    });
  };

  handleDateChange = (date) => {
    this.setState({
      due: date,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { content, due } = this.state;
    if (content.trim() && due) {
      this.props.addTodo({
        content,
        due: new Date(due).toLocaleDateString(),
      });
      this.setState({
        content: "",
        due: null,
      });
    }
  };

  render() {
    return (
      <div>
        <TextField
          label="Add New Item"
          variant="outlined"
          onChange={this.handleContentChange}
          value={this.state.content}
          inputProps={{ "data-testid": "new-item-textfield" }}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="Due Date"
            value={this.state.due}
            onChange={this.handleDateChange}
            slotProps={{ textField: { placeholder: 'MM/DD/YYYY' } }}
          />
        </LocalizationProvider>
        <Button
          style={{ marginLeft: "10px" }}
          onClick={this.handleSubmit}
          variant="contained"
          color="primary"
          data-testid="new-item-button"
        >
          Add
        </Button>
      </div>
    );
  }
}

export default AddTodo;
