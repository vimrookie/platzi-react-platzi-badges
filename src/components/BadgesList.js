import React from 'react'
import './styles/BadgesList.css'
import twitterLogo from '../images/twitter.svg';
import { Link } from 'react-router-dom';
import Gravatar from '../components/Gravatar'
class BadgesList extends React.Component {
    render() {
        if (this.props.badges.length === 0) {
            return (
                <React.Fragment>
                    <h3>Badges not found</h3>
                    <Link to="/badges/new" className="btn btn-primary">Create new badge</Link>
                </React.Fragment>
            )
        }
        return (
            <div className="Badges__list">
                <div className="Badges__container">
                    <ul className="list-unstyled">
                        {this.props.badges.map((badge) => {
                            return (
                                <li key={badge.id} className="BadgesListItem">
                                    <Link className="text-reset text-decoration-none w-100" to={`/badges/${badge.id}`} >
                                        <div className="row">
                                            <div className="col-3">
                                                <Gravatar className="BadgesListItem__avatar" email={badge.email} />
                                                {/* <img src={badge.avatarUrl} className="BadgesListItem__avatar" alt="ava tar" />*/}
                                            </div>
                                            <div className="col-9">
                                                <b>{badge.firstName} {badge.lastName}</b>< br />
                                                <img width="20" height="20" src={twitterLogo} alt="twitter" /><span className="twitter-color">@{badge.twitter}</span>< br />
                                                <small>{badge.jobTitle}</small>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default BadgesList;