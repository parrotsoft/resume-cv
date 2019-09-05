import React, { Component } from 'react';

export default class Experiences extends Component {
    render() {
        return (
            <section className="section experiences-section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-briefcase"></i></span>Experiencia</h2>

                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Desarrollador Full Stack</h3>
                            <div className="time">2018 - Actual</div>
                        </div>
                        <div className="company">Soft-G.Net</div>
                    </div>
                    <div className="details">
                        <p>Programador full stack de modulos para la gestión de transporte de compañias norteamericanas.</p>
                    </div>
                </div>


                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Desarrollador - CEO</h3>
                            <div className="time">2015 - 2018</div>
                        </div>
                        <div className="company">Grafico App</div>
                    </div>
                    <div className="details">
                        <p>Programación de módulos administrativos utilizando PHP, Bootstrap3, CSS3, MySQL y
App Moviles en Xamarin y JQuery Mobile.</p>
                    </div>
                </div>

                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Desarrollador</h3>
                            <div className="time">2014 - 2015</div>
                        </div>
                        <div className="company">Explain System & Solutions</div>
                    </div>
                    <div className="details">
                        <p>Programación de módulos administrativos utilizando PHP, Bootstrap3, CSS3, MySQL y
App Moviles en JQuery Mobile.</p>

                    </div>
                </div>

                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Desarrollador Desktop</h3>
                            <div className="time">2003 - 2004</div>
                        </div>
                        <div className="company">Facon Construcciones</div>
                    </div>
                    <div className="details">
                        <p>Desarrollo de un aplicativo para la gestión de informes médicos en Borlan Denphi 5.</p>
                    </div>
                </div>
            </section>
        );
    }
}