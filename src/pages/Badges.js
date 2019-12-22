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
            error: null,
            nextPage: 1
        }
    }

    componentDidMount() {
        this.fetchCharacters();
    }

    fetchCharacters = async () => {
        this.setState({
            loading: true,
            error: null
        })
        try {
            const response = await api.badges.list();
            this.setState({
                data: this.state.data ? [
                    ...this.state.data,
                    ...response
                ] : response,
                loading: false,
                error: null,
                nextPage: this.state.nextPage + 1
            })
        } catch (e) {
            this.setState({
                loading: false,
                error: e
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
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
                    {(this.state.data && this.state.data.length > 0) &&
                        <React.Fragment>
                            <div className="Badges_buttons">
                                <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                            </div>
                            <BadgesList badges={this.state.data} />
                        </React.Fragment>
                    }

                    {this.state.loading && (
                        <Loader />
                    )}
                    {this.state.error && (
                        <PageError error={this.state.error}/>
                    )}
                    {/* {(!this.state.loading && this.state.data.length > 0) && (
                        <div className="text-center">
                            <button onClick={() => this.fetchCharacters()} className="btn btn-primary text-center mb-3">Load More...</button>
                        </div>
                    )} */}
                </div>
            </React.Fragment>
        )
    }
}

export default Badges;