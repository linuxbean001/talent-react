import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PageContent from "../page-content/page-content";
class Login extends Component {
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
										<Link to="#"><img src="assets/images/Logo-login.svg" alt=""/></Link>
									</div>
									<form className="login_form" action="#">
										<h2>Sign In</h2>
										<div className="form-group">
											<input type="email" name="" placeholder="E-mail Adress" className="form-control" />
										</div>
										<div className="form-group">
											<input type="password" name="" placeholder="Password" className="form-control" />
										</div>
										<div className="form-group">
											<button type="button" className="sign_btn form-control">Sign in</button>
										</div>
										<div className="form-group or_title">
											<p>OR</p>
										</div>
										<div className="form-group">
											<Link to="#" className="sign_google">Sign in with Google</Link>
										</div>
										<span className="dont_account"><Link to={'/register'}>Don’t have an account yet? Sign up now</Link></span>
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
export default Login;