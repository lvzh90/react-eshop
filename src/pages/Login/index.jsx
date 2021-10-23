import React from 'react';
import useValidationLogin from '@hooks/useValidationLogin';
import './styles.scss';

const Login = () => {
	const { formRef, handleClick} = useValidationLogin();
	
	return (
		<div className="Login">
			<div className="Login-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<form action="/" className="form" ref={formRef} >
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" id="email" name='email' placeholder="platzi@example.cm" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" id="password" name='password' placeholder="*********" className="input input-password" />
					<button className="primary-button login-button" onClick={handleClick}>
						Login
					</button>
					<a href="/">Forgot my password</a>
				</form>
				<button className="secondary-button signup-button">Sign up</button>
			</div>
		</div>
	);
}

export default Login;
