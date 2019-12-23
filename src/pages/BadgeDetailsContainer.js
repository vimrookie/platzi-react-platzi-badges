import React from 'react';

import api from '../api';
import BadgeDetails from './BadgeDetails';
import Loader from '../components/Loader';
import PageError from '../components/PageError';


class BadgeDetailsContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({
            loading: true,
            error: null
        });

        try {
            const data = await api.badges.read(this.props.match.params.id);
            this.setState({
                loading: false,
                data: data
            })
        } catch (e) {
            this.setState({
                loading: false,
                error: e
            })
        }
    }

    handleDeleteBadge = async e => {
        this.setState({
            modalIsOpen: false,
            loading: true,
            error: null
        });

        try {
            await api.badges.remove(this.props.match.params.id);
            this.setState({
                loading: false
            })
            this.props.history.push('/badges');
        } catch (e) {
            this.setState({
                loading: false,
                error: e
            })
        }
    }

    handleModal = e => {
        this.setState({ modalIsOpen: !this.state.modalIsOpen })
    }

    render() {
        const badge = this.state.data;
        return (
            <React.Fragment>
                {this.state.loading && (
                    <Loader />
                )}
                {this.state.error && (
                    <PageError error={this.state.error} />
                )}

                {(this.state.data && !this.state.loading) && (
                    <BadgeDetails
                        onDeleteBadge={this.handleDeleteBadge}
                        onOpenModal={this.handleModal} 
                        onCloseModal={this.handleModal}
                        modalIsOpen={this.state.modalIsOpen}
                        badge={badge} 
                        />
                )}
            </React.Fragment>
        );
    }
}

export default BadgeDetailsContainer;