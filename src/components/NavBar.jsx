import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

//-------------------------------------------------------=
//Purpose: Top of site nav bar
//-------------------------------------------------------=


export default class NavBar extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            activeItem: ''
        }
    }

    handleItemClick = (e, { name }) => {
        this.setState({
            activeItem: name
        })
    }

    logout = () => {
        localStorage.clear()
        this.props.toggle()
    }
    
    render() {
        const { activeItem } = this.state
        return (
            <Menu inverted>
                <Menu.Item header> SERPIENTE </Menu.Item>
                <Menu.Item
                    as={Link}
                    to='/play'
                    name='PLAY NOW'
                    active={activeItem === 'play'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={Link}
                    to='/leaderboard'
                    name='LEADERBOARD'
                    active={activeItem === 'leaderboard'}
                    onClick={this.handleItemClick}
                />
                { !this.props.logged ?
                <Menu.Item
                    as={Link}
                    to="/login"
                    name='LOGIN'
                    active={activeItem === 'login'}
                    onClick={this.handleItemClick}
                />
                : 
                null
                }
                { !this.props.logged ?
                <Menu.Item
                    as={Link}
                    to="/signup"
                    name='SIGNUP'
                    active={activeItem === 'signup'}
                    onClick={this.handleItemClick}
                />
                :
                null
                }
                { this.props.logged ?
                <Menu.Item
                    name='PERSONAL RECORDS'
                    active={activeItem === 'personal'}
                    onClick={this.handleItemClick}
                />
                : 
                null
                }
                { this.props.logged ?
                <Menu.Item
                    className="logout-bttn"
                    name='LOGOUT'
                    active={activeItem === 'logout'}
                    onClick={this.logout}
                />
                :
                null
                }
            </Menu>
        )
    }
}
