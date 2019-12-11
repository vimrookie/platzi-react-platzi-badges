import React from 'react';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import './styles/BadgeNew.css';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
    render() {
        return <div>
            <Navbar />
            <div className="BadgeNew__hero">
                <img className="img-fluid" src={header} alt="header" />
            </div>

            <div className="container">
                <div clasName="row">
                    <div className="col">
                        <Badge
                            firstName="Gleycer"
                            lastName="Parra"
                            jobTitle="Fullstack Developer"
                            twitter="gleycerparra"
                            avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                        />
                    </div>
                </div>
            </div>
        </div>
    }
}

export default BadgeNew;