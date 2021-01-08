
import { Component } from "react";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/reducers/user/user.actions";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { SignUpContainer, SignUpTitle } from "./sign-up.styles";

class SignUp extends Component {
    constructor() {
        super()

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async e => {
        e.preventDefault()
        const { signUpStart } = this.props
        const { displayName, email, password, confirmPassword } = this.state

        signUpStart({ displayName, email, password })

        if (password !== confirmPassword) {
            alert("Passwords don't match")
            return;
        }

    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({ [name]: value })
    }

    render() {

        const { displayName, email, password, confirmPassword } = this.state

        return <SignUpContainer className="sign-up">
            <SignUpTitle className="title">I do not have a account</SignUpTitle>
            <span>Sign up with your email and password</span>

            <form onSubmit={this.handleSubmit} className="sign-up-form">
                <FormInput type='text' name='displayName' value={displayName} handleChange={this.handleChange} label="Display Name" required />
                <FormInput type='email' name='email' value={email} handleChange={this.handleChange} label="Email" required />
                <FormInput type='password' name='password' value={password} handleChange={this.handleChange} label="Password" required />
                <FormInput type='password' name='confirmPassword' value={confirmPassword} handleChange={this.handleChange} label="Confirm Password" required />

                <CustomButton type="submit">SIGN UP</CustomButton>

            </form>
        </SignUpContainer>
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)