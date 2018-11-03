import React, { Component } from 'react';
import { connect } from 'react-redux'
import { submitSearch, submitRandom } from '../Redux/actions'
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
import { bindActionCreators } from 'redux';

class Main extends Component {

    state = {
        search: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.submitSearch(this.state.search)
    }

    handleRandom = (e) => {
        e.preventDefault()
        this.props.submitRandom()
    }

    render() {

        const { search } = this.state
        const Enabled = search.length > 0
        //const results = this.props.search_result.map(file => <Result key={ file.id} file={ file } />)

        return (
            <div>
        <Navbar color="dark" light expand="md">
            <NavbarBrand style={{color:"white"}} >GIF Blaster 3000</NavbarBrand>
        </Navbar>
            
            <Form className="col-md-4 mx-auto mt-5" onSubmit={ this.handleSubmit }>
              <FormGroup row>
              <Label>Enter your gif search terms</Label>
                <Col>
                    <Input onChange={ e => this.setState({ search: e.target.value})}></Input>
                    
                </Col>
                <Button disabled={ !Enabled } type="submit" >Search!</Button>
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
              
            </Form>

            <Form onSubmit={ this.handleRandom } className="col-md-4 mx-auto mt-5">
            <FormGroup row>
                  <Label>Feel like something random? Hit the red button!</Label>
                  <Col>
                    <Button className="btn btn-danger" type="submit">Press Me</Button>
                  </Col>
              </FormGroup>
            </Form>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    search_result: state.search_result,
    random_result: state.random_result
})

const MapDispatchToProps = dispatch => 
    bindActionCreators({
        submitSearch,
        submitRandom
    }, dispatch)


export default connect(mapStateToProps, MapDispatchToProps) (Main)