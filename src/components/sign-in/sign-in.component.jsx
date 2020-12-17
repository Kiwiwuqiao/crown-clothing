import { Component } from "react"

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { SignInContainer, SubmitButtonContainer } from "./sign-in.styles";

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
        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)

            this.setState({ email: "", password: "" })

        } catch (error) {
            console.log(error);
        }

    }

    handleChange = e => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }

    render() {
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
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>Sign in with Google</CustomButton>
                </SubmitButtonContainer>
            </form>
        </SignInContainer >
    }
}

export default SignIn