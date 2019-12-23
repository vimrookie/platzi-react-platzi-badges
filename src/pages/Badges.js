import React from 'react'
import './styles/Badges.css';
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import api from '../api';
import PageError from '../components/PageError';
class Badges extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loading: true,
            error: null
        }
    }

    componentDidMount() {
        this.fetchData();
        this.interval = setInterval(this.fetchData, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    fetchData = async () => {
        this.setState({
            loading: true,
            error: null
        })
        try {
            const response = await api.badges.list();
            this.setState({
                data: response,
                loading: false,
            })
        } catch (e) {
            this.setState({
                loading: false,
                error: e
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                {(this.state.data && this.state.data.length > 0) &&
                    <div>
                        <div className="Badges">
                            <div className="Badges__hero">
                                <div className="Badges__container">
                                    <img className="Badges_conf-logo" src={confLogo} alt="logo" />
                                </div>
                            </div>
                        </div>
                        <div className="Badges__container">

                            <React.Fragment>
                                <div className="Badges_buttons">
                                    <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                                </div>
                                <BadgesList badges={this.state.data} />
                            </React.Fragment>
                        </div>
                    </div>
                }

                {(this.state.loading && !this.state.data) && (
                    <Loader />
                )}
                {this.state.error && (
                    <PageError error={this.state.error} />
                )}
            </React.Fragment>
        )
    }
}

export default Badges;