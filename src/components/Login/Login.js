import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'

const Login = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" placeholder="your  email" name="" id="" />
                    <br />
                    <input type="password" name="" id="" placeholder="enter your password" />
                    <input type="submit" value="submit" />
                </form>
                <p>New to ema-jhon? <Link to="/register">Create Account</Link> </p>
                <div>----------or----------</div>
                <button className="btn-regular">Google sign in</button>
            </div>
        </div>
    );
};

export default Login;