import React, {Component} from 'react'

class SignUp extends Component{

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        })
    }

    signUp = (e) => {
        e.preventDefault()
        // postfetch to users
    }

    render(){
        return(
        <div>
            <h2>Signup</h2>
            <form onSubmit={(e) => this.signUp(e)}>
            <label>UserName</label>
            <input onChange={(e) => this.handleChange(e)} name="username" type="text" />
            <label>Password</label>
            <input onChange={(e) => this.handleChange(e)} name="password" type="password" />
            <input type="submit"/>
            </form>
        </div>
        )
    }
}

export default SignUp