import { useState } from 'react';

import '../sign-up-or-sign-in.styles.scss';
import FormInput from "../../../components/form-input/form-input.component";
import CustomButton from "../../../components/custom-button/custom-button.component";

import {auth, signInWithGoogle} from "../../../firebase/firebase.utils";

const SignIn = ({back}) => {
    let [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = credentials;

        try {
            await auth.signInWithEmailAndPassword(email, password);

            setCredentials({
                ...credentials,
                password: ''
            });

        } catch (error) {
            console.error(error)
        }



        // If wrong credentials are passed to the input field, clear the password field
    }

    const handleChange = event => {
        const {value, name} = event.target;

        setCredentials({
            ...credentials,
            [name]: value
        })
    }


    return (
    <div className="sign-in"
    onClick={e => e.stopPropagation()}>
        <button className="sign-in--close" onClick={back}>X</button>

        <h2 className='sign-in--title'>Sign in</h2>

        <CustomButton additionalClasses={`custom-button--google`} onClick={signInWithGoogle}>sign in with Google</CustomButton>

        <h3 className='sign-up--subtitle'>or</h3>

        <form onSubmit={handleSubmit}>
            <FormInput
                label='Email'
                onSubmit={handleSubmit}
                name="email"
                type="email"
                value={credentials.email}
                handleChange={handleChange}
                required={true}
            />

            <FormInput
                label='Password'
                name="password"
                type="password"
                value={credentials.password}
                handleChange={handleChange}
                required={true}
            />

            <CustomButton type="submit" onSubmit={handleSubmit}>
                sign in
            </CustomButton>
        </form>
    </div>
    )

}
export default SignIn;
