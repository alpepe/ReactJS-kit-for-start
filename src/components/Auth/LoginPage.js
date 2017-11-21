import React, { Component } from 'react';
import Input from '../common/Input';
import { login } from '../../api/remote';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    async onSubmitHandler(e) {
        e.preventDefault();
        const res = await login(this.state.email, this.state.password);
        if (!res.success) {
            this.setState({error: res});
            return;
        }
        localStorage.setItem('authToken', res.token);
        if (!res.success) {
            this.setState({ error: res });
            return;
        }
        this.props.history.push('/');      
    }

    render() {

        return (
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="row space-top">
                        <div className="col-md-3">
                            <div className="form-group">
                                <Input
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChangeHandler}
                                    label="E-mail"
                                />
                            </div>
                            <div className="form-group">
                                <Input
                                    name="password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.onChangeHandler}
                                    label="Password"
                                />
                            </div>
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </div>
                    </div>
                </form>

            </div >
        );
    }
}