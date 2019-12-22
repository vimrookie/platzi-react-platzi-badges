import React from 'react';
import header from '../images/platziconf-logo.svg';
import './styles/BadgeEdit.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import Loader from '../components/Loader';

class BadgeEdit extends React.Component {
    state = {
        loading: false,
        error: null,
        form: {
            firstName: 'Gleycer',
            lastName: 'Parra',
            email: 'gleycerparra@gmail.com',
            jobTitle: 'Javascript Fullstack Developer',
            twitter: 'gleycerparra',
            avatarUrl: 'https://www.gravatar.com/avatar/402320a069647b54726603ea54bd8e13'
        }
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async e => {
        this.setState(
            {
                loading: true,
                error: null
            });
        try {
            const data = await api.badges.read(this.props.match.params.id);
            this.setState(
                {
                    loading: false, form: data
                })
        } catch (e) {
            this.setState(
                {
                    loading: false, error: e
                })
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true, error: null })
        try {
            await api.badges.update(this.props.match.params.id, this.state.form);
            this.setState({ loading: false })

            this.props.history.push('/badges');
        } catch (e) {
            this.setState({ loading: false, error: e })
        }
    }

    render() {
        return <React.Fragment>
            <div className="BadgeEdit__hero">
                <img className="BadgeEdit__hero-image img-fluid" src={header} alt="header" />
            </div>
            {(!this.state.loading) && (
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                email={this.state.form.email}
                                jobTitle={this.state.form.jobTitle}
                                twitter={this.state.form.twitter}
                                avatarUrl={this.state.form.avatarUrl}
                            />
                        </div>
                        <div className="col-6">
                            <h1>Edit Attendant</h1>
                            <BadgeForm
                                onChange={this.handleChange}
                                formValues={this.state.form}
                                onSubmit={this.handleSubmit}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            )}

            {this.state.loading && (
                <Loader />
            )}
            {/* {this.state.error && (
                <PageError error={this.state.error} />
            )} */}
        </React.Fragment>
    }
}

export default BadgeEdit;