import React, { useContext, useState } from "react";
//import UserProvider, { UserContext } from "../src/UserProvider";
import '../src/Form.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import plus from "./plus.png";
import addTask from "./firebase";



class MyForm extends React.Component {
  constructor(props)
  {
    super(props);
    //const user = this.context;
    this.state = 
    {
      show: false,
      title: "",
      description: "",
      importance: "",
      deadline: ""

    };

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit()
  {
    let task = {
      "title": this.state.title,
      "description": this.state.description,
      "importance": this.state.importance,
      "deadline": this.state.deadline
    }
    addTask(task);
  }

  handleChange(event) {
    console.log();
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleClose()
  {
    this.setState({show: false});
  }

  handleShow()
  {
    this.setState({show: true});
  }
    
  render()
  {
  
  return (
    <>
        <button className="card" id="card-plus" onClick={this.handleShow}>
            <img id="plus" src={plus}></img>
        </button>
      

      <Modal
        show={this.state.show}
        onHide={this.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Title:</Form.Label>
            <Form.Control onChange={this.handleChange} name="title" type="text" placeholder="e.q. Read a book" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description:</Form.Label>
            <Form.Control onChange={this.handleChange} name="description" as="textarea" rows={2} />
          </Form.Group>
          
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Importance:</Form.Label>
            <Form.Control onChange={this.handleChange} name="importance" as="select" multiple>
              <option>Crucial</option>
              <option>Very important</option>
              <option>Important</option>
              <option>Not important</option>
              <option>Insignificant</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Deadline:</Form.Label>
            <br></br>
            <input onChange={this.handleChange} name="deadline" type="date"></input>
          </Form.Group>

        
        <Modal.Footer>
          <Button variant="danger" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="success" type="submit">Add</Button>
        </Modal.Footer>
          </Form>
        </Modal.Body>
        
        
      </Modal>
      
    </>
  );
  }
}
export default MyForm;
