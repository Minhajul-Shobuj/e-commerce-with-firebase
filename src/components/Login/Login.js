import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './login.css'

const Login = () => {
    const { signInwithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    const handleGoogleSignIn = () => {
        signInwithGoogle()
            .then((result) => {
                history.push(redirect_uri);
            });
    }
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" placeholder="your  email" name="" id="" />
                    <br />
                    <input type="password" name="" id="" placeholder="enter your password" />
                    <br /> <input type="submit" value="submit" />
                </form>
                <p>New to ema-jhon? <Link to="/register">Create Account</Link> </p>
                <div>----------or----------</div>
                <button onClick={handleGoogleSignIn} className="btn-regular">Google sign in</button>
            </div>
        </div>
    );
};

export default Login;