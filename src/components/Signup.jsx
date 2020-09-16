import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from '../images/snake_head.png'
import hitSound from '../sounds/hitSound'
import {Link} from 'react-router-dom'

//-------------------------------------------------------=
//Purpose: signup form
//       : hitSound on keypress
//-------------------------------------------------------=


export default class Login extends Component {
    
    handleChange = (e) => {
        hitSound.play()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
        
    handleSignUp = (e) => {
        e.preventDefault()
        // post fetch to users request
        
        fetch('http://localhost:3000/api/v1/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accepts": "application/json"
            }, 
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(resp => resp.json())
        .then(user => {
            localStorage.token = user.token
        })
        
        this.props.toggle()
    }

    render() {
        return (
            <div class="backdrop">
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='white' textAlign='center'>
                    <Image src={logo} /> Create an Account
                    </Header>
                <Form size='large' onSubmit={(e) => this.handleSignUp(e)}>
                    <Segment stacked>
                    <Form.Input 
                    fluid 
                    icon='user' 
                    iconPosition='left' 
                    placeholder='username' 
                    name="username"
                    onChange={(e) => this.handleChange(e)}
                    />
                    <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='password'
                    type='password'
                    name="password"
                    onChange={(e) => this.handleChange(e)}
                    />
                    <Button color='black' fluid size='large'>
                    Sign-Up
                    </Button>
                </Segment>
                </Form>
                <Message color="black">
                    Already have an Account?  <Link to="/login">Sign-In</Link>
                </Message>
                </Grid.Column>
            </Grid>  
            </div> 
        )
    }
}