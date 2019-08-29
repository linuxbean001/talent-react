import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PageContent from "../page-content/page-content";
class Register extends Component {
	constructor() {
		super();

		this.img_url2 = 'assets/images/illustration.png';
	}
	render() {
		return (
			<div>
				<div className="login">
					<div className="container height100">
						<div className="row height100">
							<PageContent />
							<div className="col-md-5 height100">
								<div className="login_right_content height100">
									<div className="login_logo">
										<a href="#"><img src="assets/images/Logo-login.svg" /></a>
									</div>
									<form className="login_form" action="#">
										<h2>Sign Up</h2>
										<div className="form-group">
											<input type="text" name="" placeholder="Name Lastname" className="form-control" />
										</div>
										<div className="form-group">
											<input type="email" name="" placeholder="E-mail Adress" className="form-control" />
										</div>
										<div className="form-group">
											<input type="text" name="" placeholder="Company" className="form-control" />
										</div>
										<div className="form-group">
											<input type="password" name="" placeholder="Password" className="form-control" />
										</div>
										<div className="form-group">
											<button type="button" className="sign_btn form-control">Sign up</button>
										</div>
										<div className="form-group or_title">
											<p>OR</p>
										</div>
										<div className="form-group">
											<a href="#" className="sign_google">Sign up with Google</a>
										</div>
										<span className="dont_account"><Link to={'/login'}>I have an account. Sign in</Link></span>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Register;