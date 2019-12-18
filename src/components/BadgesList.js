import React from 'react'
import './styles/BadgesList.css'
import twitterLogo from '../images/twitter.svg';

class BadgesList extends React.Component {
    render() {
        return (
            <div className="Badges__list">
                <div className="Badges__container">
                    <ul className="list-unstyled">
                        {this.props.badges.map((badge) => {
                            return (
                                <li key={badge.id} className="BadgesListItem">
                                    <div className="row badge-list-container">
                                        <div className="col-3">
                                            <img src={badge.avatarUrl} className="BadgesListItem__avatar" alt="avatar" />
                                        </div>
                                        <div className="col-9">
                                            <b>{badge.firstName} {badge.lastName}</b>< br />
                                            <img width="20" height="20" src={twitterLogo} alt="twitter" /><span className="twitter-color">@{badge.twitter}</span>< br />
                                            <small>{badge.jobTitle}</small>
                                        </div>
                                    </div>
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