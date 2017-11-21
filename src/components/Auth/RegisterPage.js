import React, { Component } from 'react';
import Input from '../common/Input';
import { register } from '../../api/remote';

export default class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            repeat: ''
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    async onSubmitHandler(e) {
        e.preventDefault();
        
        const res = await register(this.state.name, this.state.email, this.state.password);
        
    }

    render() {
    
    
        return (
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1>Register</h1>
                        <p>Please fill all fields.</p>
                    </div>
                </div>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group">
                                <Input
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChangeHandler}
                                    label="Name"
                                />
                                
                            </div>
                            <div className="form-group has-success">
                                <Input
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChangeHandler}
                                    label="E-mail"
                                />
                                
                            </div>
                            <div class="form-group has-success">
                                <Input
                                    name="password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.onChangeHandler}
                                    label="Password"
                                />
                                
                            </div>
                            <div className="form-group has-success">
                                <Input
                                    name="repeat"
                                    type="password"
                                    value={this.state.repeat}
                                    onChange={this.onChangeHandler}
                                    label="Repeat password"
                                />
                                
                            </div>
                            <input type="submit" className="btn btn-primary" value="Register" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}