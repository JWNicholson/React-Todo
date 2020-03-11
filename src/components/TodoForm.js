import React from "react";
import { Col, Button, Form, Input, Row, FormGroup } from 'reactstrap';
import "./TodoForm.css";



class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        }
    }

    handleChange = e => {
        this.setState({ inputValue: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.inputValue);
        this.setState({ inputValue: '' })
    }

    render() {
        return (
            <div className="todo-form">
             <Form onSubmit={this.handleSubmit}>
             <Row form>  
            <Col >
            <FormGroup>
                <Input
                    type="text"
                    placeholder="Add your new to-dos"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
                  </FormGroup>     
                  <FormGroup>
                     <Button color="info" block type="submit">
                        Add a to-do
                      </Button> 
                    </FormGroup>
                        
                    <FormGroup>
                       <Button color="danger" block onClick={this.props.clearCompleted}>
                            Clear completed to-dos
                        </Button>
                    </FormGroup>
                </Col>     
                </Row>   
                </Form>
            
            </div>
        )
    }
}

export default TodoForm;