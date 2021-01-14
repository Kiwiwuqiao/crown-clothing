
import { useState } from "react";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/reducers/user/user.actions";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { SignUpContainer, SignUpTitle } from "./sign-up.styles";

const SignUp = ({ signUpStart }) => {

    const [userCredentials, setUserCredentials] = useState(
        {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    )

    const { displayName, email, password, confirmPassword } = userCredentials

    const handleSubmit = async e => {
        e.preventDefault()

        signUpStart({ displayName, email, password })

        if (password !== confirmPassword) {
            alert("Passwords don't match")
            return;
        }

    }

    const handleChange = e => {
        const { name, value } = e.target

        setUserCredentials({ ...userCredentials, [name]: value })
    }



    return <SignUpContainer className="sign-up">
        <SignUpTitle className="title">I do not have a account</SignUpTitle>
        <span>Sign up with your email and password</span>

        <form onSubmit={handleSubmit} className="sign-up-form">
            <FormInput type='text' name='displayName' value={displayName} handleChange={handleChange} label="Display Name" required />
            <FormInput type='email' name='email' value={email} handleChange={handleChange} label="Email" required />
            <FormInput type='password' name='password' value={password} handleChange={handleChange} label="Password" required />
            <FormInput type='password' name='confirmPassword' value={confirmPassword} handleChange={handleChange} label="Confirm Password" required />

            <CustomButton type="submit">SIGN UP</CustomButton>

        </form>
    </SignUpContainer>

}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)