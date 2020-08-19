import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from '../images/snake_head.png'
import hitSound from '../sounds/hitSound'
import {Link} from 'react-router-dom'

export default class Login extends Component {
    
    handleChange = (e) => {
        hitSound.play()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
        
    handleSubmit = (e) => {
        e.preventDefault()
        
        // post fetch request
        fetch("http://localhost:3000/api/v1/login", {
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
            console.log(user)
            localStorage.token = user.token
        })
        this.props.toggle()
    }

    render() {
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='black' textAlign='center'>
                    <Image src={logo} /> Log-in to your account
                    </Header>
                <Form size='large' onSubmit={(e) => this.handleSubmit(e)}>
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
                    Login
                    </Button>
                </Segment>
                </Form>
                <Message color="black">
                    Don't have an Account?  <Link to="/signup"> Sign-Up </Link>
                </Message>
                </Grid.Column>
            </Grid>   
        )
    }
}





