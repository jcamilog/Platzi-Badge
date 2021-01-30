import React from 'react';

import logoConf from '../assets/imgConf/badge-header.svg'
import './styles/Badge.css'

class Badge extends React.Component {
    render() {
        return (
            <div className="badge">
                <div className="badge_header">
                    <img src={logoConf} alt="Logo Conf"/>
                </div>
                <div className="badge_section-name">
                    <img className="badge_avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="Profile"/>
                    <h1>
                        Camilo <br/> Guerrero
                    </h1>
                </div>
                <div className="badge_section-info">
                    <p>Front End Developer At Web Developter</p>
                    <p>@jcamilogg</p>
                </div>
                <div className="badge_footer">
                    #platziConf
                </div>
            </div>
        )
    }
}

export default Badge;