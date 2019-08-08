import React, { Component } from 'react';

export default class Experiences extends Component {
    render() {
        return (
            <section className="section experiences-section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-briefcase"></i></span>Experiences</h2>
                
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Lead Developer</h3>
                            <div className="time">2015 - Present</div>
                        </div>
                        <div className="company">Startup Hubs, San Francisco</div>
                    </div>
                    <div className="details">
                        <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.</p>  
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                    </div>
                </div>
                
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Senior Software Engineer</h3>
                            <div className="time">2014 - 2015</div>
                        </div>
                        <div className="company">Google, London</div>
                    </div>
                    <div className="details">
                        <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>  
                        
                    </div>
                </div>
                
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">UI Developer</h3>
                            <div className="time">2012 - 2014</div>
                        </div>
                        <div className="company">Amazon, London</div>
                    </div>
                    <div className="details">
                        <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>  
                    </div>
                </div>
            </section>
        );
    }
}