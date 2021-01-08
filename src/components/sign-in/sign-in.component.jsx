import { Component } from "react"

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { SignInContainer, SubmitButtonContainer } from "./sign-in.styles";
import { connect } from "react-redux";
import { emailSignInStart, googleSignInStart } from "../../redux/reducers/user/user.actions";

class SignIn extends Component {
    constructor() {
        super()

        this.state = {
            email: "",
            password: ""
        }

    }

    handleSubmit = async e => {
        e.preventDefault();
        const { emailSignInStart } = this.props
        const { email, password } = this.state
        emailSignInStart(email, password)

    }

    handleChange = e => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }

    render() {
        const { googleSignInStart } = this.props

        return <SignInContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password.</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput
                    label="Email"
                    handleChange={this.handleChange}
                    type="email"
                    name="email"
                    value={this.state.email}
                    required />

                <FormInput
                    label="Password"
                    handleChange={this.handleChange}
                    type="password"
                    name="password"
                    value={this.state.password}
                    required />

                <SubmitButtonContainer>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn={true}>Sign in with Google</CustomButton>
                </SubmitButtonContainer>
            </form>
        </SignInContainer >
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)