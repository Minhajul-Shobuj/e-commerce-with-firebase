import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <input type="eamil" id="" name="" placeholder="your email" />
                    <br />
                    <input type="password" id="" name="" placeholder="your password" />
                    <br />
                    <input type="password" id="" name="" placeholder="re-enter password" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link> </p>
                <div>------or------</div>
                <button className="btn-regular">Google sign in</button>
            </div>
        </div>
    );
};

export default Register;