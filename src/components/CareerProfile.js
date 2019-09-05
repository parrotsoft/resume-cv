import React, { Component } from 'react';

export default class CareerProfile extends Component {
    render() {
        return (
            <section className="section summary-section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-user"></i></span>Sobre mí</h2>
                <div className="summary">
                    <p>Hola, soy un apasionado por la programación en general, desde adolescente inicie un proceso de auto aprendizaje y día a día enriquezco mis conocimientos con nuevas herramientas. mis inicio en este camino se remontan al año 2003 con una computadora muy básica en comparación con las actuales y un viejo libro de segunda mano de Turbo Pascal, par de años después inicie mi labor con Delphi 5 y desde entonces no e parado de programar, en ocasiones por hobbies y otras por trabajo.</p>
                </div>
            </section>
        );
    }
}