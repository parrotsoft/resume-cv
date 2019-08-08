import React, { Component } from 'react';

import Profile from '../components/Profile';
import Contact from '../components/Contact';
import Education from '../components/Education';
import Languages from '../components/Languages';
import CareerProfile from '../components/CareerProfile';
import Experiences from '../components/Experiences';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="sidebar-wrapper">
                        <Profile />
                        <Contact />
                        <Education />
                        <Languages />
                    </div>

                    <div className="main-wrapper">
                        <CareerProfile />
                        <Experiences />
                        <Projects />
                        <Skills />
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}