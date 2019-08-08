import React, { Component } from 'react';

export default class Languages extends Component {
    render() {
        return (
            <div className="languages-container container-block">
                <h2 className="container-block-title">Languages</h2>
                <ul className="list-unstyled interests-list">
                    <li>English <span className="lang-desc">(Native)</span></li>
                    <li>French <span className="lang-desc">(Professional)</span></li>
                    <li>Spanish <span className="lang-desc">(Professional)</span></li>
                </ul>
            </div>
        );
    }
}