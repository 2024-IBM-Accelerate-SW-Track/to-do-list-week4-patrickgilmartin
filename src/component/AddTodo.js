import React, { Component } from "react";
import { Button, TextField } from "@mui/material";

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      date: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value,
      date: new Date().toLocaleString('en-US'),
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.content.trim()) {
      this.props.addTodo({
        content: this.state.content,
        date: this.state.date,
      });
      this.setState({
        content: "",
        date: "",
      });
    }
  };

  render() {
    return (
      <div>
        <TextField
          label="Add New Item"
          variant="outlined"
          onChange={this.handleChange}
          value={this.state.content} 
          inputProps={{ "data-testid": "new-item-textfield" }}      
        />
        <Button
          style={{ marginLeft: "10px" }}
	@@ -50,9 +50,9 @@ class AddTodo extends Component {
        >
          Add
        </Button>
      </div>
    );
  }
}

export default AddTodo;
