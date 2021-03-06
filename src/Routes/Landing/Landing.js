import React, { Component } from 'react'

import Navbar from '../../Components/Navbar/Navbar'
import './Landing.css'



export default class Landing extends Component {
    render() {
        return (
            <div className="Landing">
                <Navbar />

                <div className="LandingSection">
                    <header>
                        <h1 className="header">Why FlightType?</h1>
                    </header>
                    <section className="Card">
                        <p>With FlightType you'll be able to access your flight information from one location.  A user will be able to search and save their flight info such as departure/arrival times and airports so you don't have to search through different sites.</p>
                    </section>
                    <section className="Card">
                        <header>
                            <h2 className="header">Getting Started</h2>
                        </header>
                        <p>To get started just click the "Register" tab and fill out some basic information. Once you're registered you'll just have to login to your account, and start adding your flight information.  If you're ready, let's get started</p>
                    </section>
                    <section className="Card">
                        <header>
                            <h2 className="header">Wanna try it out?</h2>
                        </header>
                        <p>If you'd like to try it out, simply login to our test account.</p>
                        <ul>
                            <li>Username: testUser</li>
                            <li>Password: Password123!</li>
                        </ul>
                        <p>Once logged in, check out what we have to offer. We know you'll like what you see!</p>
                    </section>
                </div>
            </div>
        );
    }
}

