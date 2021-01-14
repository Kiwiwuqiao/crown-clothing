import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { SignInContainer, SubmitButtonContainer } from "./sign-in.styles";
import { connect } from "react-redux";
import { emailSignInStart, googleSignInStart } from "../../redux/reducers/user/user.actions";
import { useState } from "react";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setUserCredentials] = useState({ email: "", password: "" })
    const { email, password } = userCredentials

    const handleSubmit = async e => {
        e.preventDefault();
        emailSignInStart(email, password)

    }

    const handleChange = e => {
        const { value, name } = e.target
        setUserCredentials({ ...userCredentials, [name]: value })
    }


    return <SignInContainer>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={handleSubmit}>
            <FormInput
                label="Email"
                handleChange={handleChange}
                type="email"
                name="email"
                value={email}
                required />

            <FormInput
                label="Password"
                handleChange={handleChange}
                type="password"
                name="password"
                value={password}
                required />

            <SubmitButtonContainer>
                <CustomButton type="submit">Sign In</CustomButton>
                <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn={true}>Sign in with Google</CustomButton>
            </SubmitButtonContainer>
        </form>
    </SignInContainer >

}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)