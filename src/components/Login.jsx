import React, {Component} from 'react'

class Login extends Component{

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        // post fetch request
    }

    render(){
        return(
        <div>
            <h2>Login</h2>
            <form onSubmit={(e) => this.handleSubmit(e)}>
            <label>UserName</label>
            <input onChange={(e) => this.handleChange(e)} name="username" type="text"  />
            <label>Password</label>
            <input onChange={(e) => this.handleChange(e)} name="password" type="password" />
            <input type="submit"/>
            </form>
        </div>
        )
    }
}

export default Login