import React from 'react';

import Navbar from '../components/Nabvar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import logo from '../assets/imgConf/badge-header.svg';

import '../components/styles/BadgeNew.css';

class BadgeNew extends React.Component{
    render () {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={logo} alt="logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName="Camilo" lastName="guerrero" twitter="jcamilogg" jobTitle="Front End Developer and Web Developer" avatarUrl=""/>
                        </div>
                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew; 