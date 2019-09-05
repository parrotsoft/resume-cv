import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div className="contact-container container-block">
                <ul className="list-unstyled contact-list">
                    <li className="email"><i className="fas fa-envelope"></i><a href="mailto: lopezarizamiguel@gmail.com">lopezarizamiguel@gmail.com</a></li>
                    <li className="phone"><i className="fas fa-phone"></i><a href="tel:301 557 5931">301 557 5931</a></li>
                    <li className="linkedin"><i className="fab fa-linkedin-in"></i><a href="https://www.linkedin.com/in/mlopezariza" target="_blank">/in/mlopezariza</a></li>
                    <li className="github"><i className="fab fa-github"></i><a href="https://github.com/parrotsoft" target="_blank">github.com/parrotsoft</a></li>
                    <li className="twitter"><i className="fab fa-twitter"></i><a href="https://twitter.com/miguelopeza" target="_blank">@miguelopeza</a></li>
                </ul>
            </div>
        );
    }
}