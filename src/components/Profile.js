import React, { Component } from 'react';
import avatar from '../assets/images/profile.png';

export default class Profile extends Component {
    render() {
        return (
            <div className="profile-container">
                <img className="profile" src={avatar} alt="" />
                <h1 className="name">Miguel López Ariza</h1>
                <h3 className="tagline">Full Stack Developer</h3>
            </div>
        );
    }
}