import React from 'react'
import './styles/BadgesList.css'
import twitterLogo from '../images/twitter.svg';
import { Link } from 'react-router-dom';
import Gravatar from '../components/Gravatar'

function useSearchBadges(badges) {
    const [query, setQuery] = React.useState('');
    const [filteredBadges, setFilteredBadges] = React.useState(badges);

    React.useMemo(() => {
        const result = badges.filter(badge => {
            for (const key of Object.keys(badge)) {
                if (badge[key].toLowerCase().includes(query.toLowerCase())) {
                    return badge;
                }
            }
        });

        setFilteredBadges(result);
    }, [badges, query]);

    return { query, setQuery, filteredBadges };
}


const BadgesList = (props) => {

    const { query, setQuery, filteredBadges } = useSearchBadges(props.badges);
    if (filteredBadges.length === 0) {
        return (
            <React.Fragment>
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input type="text" className="form-control"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }}
                    />
                </div>
                <h3>Badges not found</h3>
                <Link to="/badges/new" className="btn btn-primary">Create new badge</Link>
            </React.Fragment>
        )
    }
    return (
        <div className="Badges__list">
            <div className="form-group">
                <label>Filter Badges</label>
                <input type="text" className="form-control"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                />
            </div>
            <div className="Badges__container">
                <ul className="list-unstyled">
                    {filteredBadges.map((badge) => {
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

export default BadgesList;