import React from 'react'
import './styles/Badges.css';
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList';
import { Link } from 'react-router-dom';

class Badges extends React.Component {
    state = {
        data: [
            {
                id: 1,
                firstName: 'Gleycer',
                lastName: 'Parra',
                email: 'gleycerparra@gmail.com',
                jobTitle: 'Javascript Fullstack Developer',
                twitter: 'gleycerparra',
                avatarUrl: 'https://www.gravatar.com/avatar?d=identicon'
            },
            {
                id: 2,
                firstName: 'Gleycer',
                lastName: 'Parra',
                email: 'gleycerparra@gmail.com',
                jobTitle: 'Javascript Fullstack Developer',
                twitter: 'gleycerparra',
                avatarUrl: 'https://www.gravatar.com/avatar?d=identicon'
            },
            {
                id: 3,
                firstName: 'Gleycer',
                lastName: 'Parra',
                email: 'gleycerparra@gmail.com',
                jobTitle: 'Javascript Fullstack Developer',
                twitter: 'gleycerparra',
                avatarUrl: 'https://www.gravatar.com/avatar?d=identicon'
            }
        ]
    }
    render() {
        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="logo" />
                        </div>
                    </div>
                </div>
                <div className="Badges__container">
                    <div className="Badges_buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>
                    <BadgesList badges={this.state.data} />

                </div>
            </React.Fragment>
        )
    }
}

export default Badges;