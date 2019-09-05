import React, { Component } from 'react';

export default class Education extends Component {
    render() {
        return (
            <div className="education-container container-block">
                <h2 className="container-block-title">Educación</h2>
                <div className="item">
                    <h4 className="degree">Ing. de Sistemas</h4>
                    <h5 className="meta">Fundación Universitaria San Martín</h5>
                    <div className="time">2010 - 2012</div>
                </div>
                <div className="item">
                    <h4 className="degree">Ing. De Sistemas y Computación</h4>
                    <h5 className="meta">Corporación Universitaria Latinoamericana</h5>
                    <div className="time">2018 - Actual</div>
                </div>
            </div>
        );
    }
}