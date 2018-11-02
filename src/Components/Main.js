import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Input,
    InputGroup,
    Label,
    Col,
    Row,
    Form,
    Button,
    FormGroup,
    FormText
     } from 'reactstrap';

class Main extends Component {

    state = {
        
    }
    render() {

        return (
            <div>
        <Navbar color="dark" light expand="md">
            <NavbarBrand style={{color:"white"}} >GIF Blaster 3000</NavbarBrand>
        </Navbar>
            
            <Form className="col-md-4 mx-auto mt-5">
              <FormGroup row>
              <Label>Enter your gif search terms</Label>
                <Col>
                    <Input />
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label>How many GIF's do you need?</Label>
                <Col>
                <Input type="select" className="col-md-2">
                        <option></option>
                        <option>5</option>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>

                    </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                  <Label>Feel like something random? Hit the red button!</Label>
                  <Col>
                    <Button className="btn btn-danger">Press Me</Button>
                  </Col>
              </FormGroup>
            </Form>

            </div>
        )
    }
}

export default Main