import React, { Component } from 'react';
import '../assets/css/Components.css';

export default class Skills extends Component {
    render() {
        return (
            <section className="skills-section section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
                <div className="skillset">        
                    <div className="item">
                        <h3 className="level-title">Python &amp; Django</h3>
                        <div className="progress level-bar">
						    <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: '99%' }} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
						</div>                               
                    </div>
                    
                    <div className="item">
                        <h3 className="level-title">Javascript &amp; jQuery</h3>
                        <div className="progress level-bar">
						    <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: '98%' }} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
						</div>                              
                    </div>
                    
                    <div className="item">
                        <h3 className="level-title">Angular</h3>
                        <div className="progress level-bar">
						    <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: '98%' }} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
						</div>                                 
                    </div>
                    
                    <div className="item">
                        <h3 className="level-title">HTML5 &amp; CSS</h3>
                        <div className="progress level-bar">
							    <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
						</div>                                
                    </div>
                    
                    <div className="item">
                        <h3 className="level-title">Ruby on Rails</h3>
                        <div className="progress level-bar">
						    <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
						</div>                                  
                    </div>
                    
                    <div className="item">
                        <h3 className="level-title">Sketch &amp; Photoshop</h3>
                        <div className="progress level-bar">
						    <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
						</div>                                 
                    </div>
                    
                </div>  
            </section>
        );
    }
}