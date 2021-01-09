import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ email: "", password: "" });
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account </h2>
				<span>Sign In with your Email and Password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						handleChange={this.handleChange}
						label="Email"
						name="email"
						type="email"
						value={this.state.email}
						required
					/>
					<FormInput
						name="password"
						type="password"
						value={this.state.password}
						required
						label="Password"
						handleChange={this.handleChange}
					/>
					<div className="button-container">
					<CustomButton type="submit">SIGN IN</CustomButton>
					<CustomButton isGoogleSignIn onClick={signInWithGoogle}>
						SIGN IN WITH GOOGLE
					</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
