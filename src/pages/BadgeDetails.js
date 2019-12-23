import React from 'react';
import confLogo from '../images/platziconf-logo.svg'
import './styles/BadgeDetails.css';
import Badge from '../components/Badge';
import { Link } from 'react-router-dom';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

const useIncreaseCount = (max) => {
    const [count, setCount] = React.useState(0);
    if (count > max) {
        setCount(0);
    }

    return [count, setCount];
}
const BadgeDetails = (props) => {
    const [count, setCount] = useIncreaseCount(4);
    return (
        <div>
            <React.Fragment>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 text-center">
                                <img src={confLogo} alt="logo" />
                            </div>
                            <div className="col-6 text-center BadgeDetails__hero-attendant-name">
                                <h1>
                                    {props.badge.firstName} {props.badge.lastName}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName={props.badge.firstName}
                                lastName={props.badge.lastName}
                                email={props.badge.email}
                                jobTitle={props.badge.jobTitle}
                                twitter={props.badge.twitter}
                            />
                        </div>
                        <div className="col">
                            <h2>Actions</h2>
                            <div>
                                <div>
                                    <button onClick={() => {
                                        setCount(count + 1);
                                    }} className="btn btn-primary mr-3">
                                        Increase Count: {count}
                                    </button>
                                    <Link className="btn btn-primary mb-3" to={`/badges/${props.badge.id}/edit`} >Edit</Link>
                                </div>
                                <div>
                                    <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                                    <DeleteBadgeModal
                                        onDeleteBadge={props.onDeleteBadge}
                                        modalIsOpen={props.modalIsOpen}
                                        onCloseModal={props.onCloseModal} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </div>
    )
}

export default BadgeDetails;