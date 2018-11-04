import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { submitSearch, submitRandom } from '../Redux/actions'
import {
    Navbar,
    NavbarBrand,
    Input,
    InputGroup,
    Label,
    Col,
    Form,
    Button,
    FormGroup,
    FormText
     } from 'reactstrap';
import Display from './Display';

class Main extends Component {

    state = {
        search: '',
        number: '',
        filterBy: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.submitSearch(this.state.search, this.state.number)
    }

    handleRandom = (e) => {
        e.preventDefault()
        this.props.submitRandom()
    }

    setNumber = (e) => {
        this.setState({ number: e.target.value })
    }

    setFilter = (e) => {
        this.setState({ filterBy: e.target.value })
    }

    render() {
        //Simple verification on search input so a blank search can't be submitted 
        const { search } = this.state
        const Enabled = search.length > 0

        //Search result functionality
        const results = this.props.search_result.map(file => <Display key={ file.id} file={ file } />)
        //Random search funtionality
        const randomResults = this.props.random_result.map(file => <Display key={ file.id} file={ file } />)
        //Filter functionality
        const filteredResults = this.props.search_result.filter(input => 
            { return input.title.includes(this.state.filterBy)}  ).map(file => <Display key={ file.id} file={ file } />)


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
                    <Input type="select" value={ this.state.number } onChange={ this.setNumber } className="col-md-2">
                
                        <option value="0"></option>
                        <option value="1">1</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>

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

             <div className="col-md-2 offset-1 mb-2">
                {/* Render the filter components after the search is submitted */}
                  { (this.props.search_result.length > 0) ?
            
            <InputGroup>
            <Label className="mr-3">Sort</Label><Input value={ this.state.filterBy } onChange={ this.setFilter }></Input>
            </InputGroup>
            
                    : null }

            </div>

            <div className="col-md-12 d-flex flex-wrap">
                {/* If the filter box has been typed in re-render the page with the filtered options */}
                { (filteredResults.length > 0) ? filteredResults :
                 results  }

            { randomResults } 
                
            </div>
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