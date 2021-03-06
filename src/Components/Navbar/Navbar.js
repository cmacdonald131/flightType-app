import React, { Component } from 'react'
import ApiContext from '../../ApiContext'
import TokenService from '../../Services/token-service'
import { Link } from 'react-router-dom'
import './Navbar.css'



class Navbar extends Component {
    static contextType = ApiContext

    logout = () => {
        this.context.setUser(null)
        TokenService.clearAuthToken()
    }
    
    //when successfully logged in the navbar will display a link for the team page and log out.  When logged out it will show links for login and register

    render() {
        let menus
        if (this.context.user) {
            menus = (
                <div id="myLinks">
                    <Link to="/user" className="navLink" aria-label="Home Page">Home</Link>
                    <Link to='/' onClick={this.logout} className="navLink" aria-label="Logout">Logout</Link>
                </div>
            )
        }

        else {
            menus = (
                <div id="myLinks">
                    <Link to="/login" className="navLink" aria-label="Login">Login</Link>
                    <Link to="/signup" className="navLink"aria-label="Signup">Signup</Link>
                </div>
            )
        }

        return (
            <div className="Navbar">
                <nav className="nav">
                    <a href="/" className="active" aria-label="Landing Page">FT</a>
                    {menus}
                </nav>
            </div>
        );
    }
}
export default Navbar;