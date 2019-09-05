import React, { Component } from 'react';

export default class Languages extends Component {
    render() {
        return (
            <div className="languages-container container-block">
                <h2 className="container-block-title">Idiomas</h2>
                <ul className="list-unstyled interests-list">
                    <li>Español <span className="lang-desc">(Nativo)</span></li>
                    <li>English <span className="lang-desc">(Tecnico)</span></li>
                </ul>
            </div>
        );
    }
}