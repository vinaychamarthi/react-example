import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import onInputChange from '../store/action';

class LoginPage extends Component {

    handleChange = (id,value) => {
        this.props.onInputChange(id,value);
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        const { name, password} = this.props;
        
        return (
            <div className="container-body">
                <h2>Login Form</h2>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <input type="text" name="username" id="userName" placeholder="Username" value={name} onChange={(e) => this.handleChange(e.target.id,e.target.value)} required />
                            <input type="password" name="password" placeholder="Password" id="password" value={password} onChange={(e) => this.handleChange(e.target.id,e.target.value)} required />
                            <button className="btn btn-primary" ><Link to="/homePage">Login</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    name: state.loginReducer.userName ,
    password: state.loginReducer.password  
})
const mapDispatchToProps = (dispatch) => ({
    onInputChange: (id,value) => dispatch(onInputChange(id,value))
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
