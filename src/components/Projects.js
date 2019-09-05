import React, { Component } from 'react';

export default class Projects extends Component {
    render() {
        return (
            <section className="section projects-section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-archive"></i></span>Proyectos</h2>
                <div className="intro">
                    <p>Los siguientes son los proyectos mas importantes en los que participe con distintos roles, cada uno marco dejo conocimientos que hoy en día me convierten en un mejor desarrollador.</p>
                </div>
                <div className="item">
                    <span className="project-title">
                        <a target="_blank" href="https://play.google.com/store/apps/details?id=myTienda.myTienda&hl=es">My Tienda</a></span> - <span className="project-tagline">Aplicativo web y móvil que permite la gestión de pedidos en negocios de barrios.</span>

                </div>
                <div className="item">
                    <span className="project-title">
                        <a href="http://18.188.136.180/views/login/login.php" target="_blank">PATI</a></span> -
                    <span className="project-tagline">Aplicativo que implementa un canal de comunicación directo entre los profesores, administrativos, padres y estudiantes de instituciones educativas.</span>
                </div>
                <div className="item">
                    <span className="project-title">
                        <a href="http://webappdev.taschedule.com/" target="_blank">TaSchedule</a></span> -
                         <span className="project-tagline">Aplicativo para la gestión de ruta de busces públicos en Miami.</span>
                </div>
                <div className="item">
                    <span className="project-title">
                        <a href="http://dev.trip2.com" target="_blank">Trip2</a></span> -
                        <span className="project-tagline">Aplicativo para la gestión de citas medicas y call center. </span>
                </div>
            </section>
        );
    }
}