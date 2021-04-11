import {useState} from 'react';

import '../sign-up-or-sign-in.styles.scss';
import FormInput from "../../../components/form-input/form-input.component";
import CustomButton from "../../../components/custom-button/custom-button.component";

import {auth, createUserProfileDocument, signInWithGoogle} from "../../../firebase/firebase.utils";


const SignUp = ({back}) => {
    let [credentials, setCredentials] = useState({
       displayName: '',
       email: '',
       password: '',
       confirmPassword: ''
    });

    const [isPasswordMatching, setIsPasswordMatching]= useState(credentials.password === credentials.confirmPassword);

    const handleChange = event => {
        const {value, name} = event.target;

        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const handleSubmit = async event => {
        event.preventDefault();

        const {password, confirmPassword, displayName} = credentials;

        setIsPasswordMatching(password === confirmPassword);

        if (!isPasswordMatching) {
            resetPasswordField();
            return;
        }

        try {
            const { user }  = await auth.createUserWithEmailAndPassword(
                credentials.email,
                credentials.password
            );

            await createUserProfileDocument(user, {displayName})

        } catch (error) {
           console.error(error);
        }

        // If wrong credentials are passed to the input field, clear the password field

    }

    const resetPasswordField = () => {
        setCredentials({
            ...credentials,
            password: '',
            confirmPassword: ''
        });
    }


    return (
        <div className="sign-up"
            onClick={e => e.stopPropagation()}>
            <button className="sign-up--close" onClick={back}>X</button>

            <h2 className='sign-up--title'>Sign up</h2>

            <CustomButton additionalClasses={`custom-button--google`} onClick={signInWithGoogle}>sign up with Google</CustomButton>

            <h3 className='sign-in--subtitle'>or</h3>

            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Display name'
                    onSubmit={handleSubmit}
                    name="displayName"
                    type="text"
                    value={credentials.displayName}
                    handleChange={handleChange}
                    required={true}
                />

                <FormInput
                    label='Email'
                    onSubmit={handleSubmit}
                    name="email"
                    type="email"
                    value={credentials.email}
                    handleChange={handleChange}
                    required={true}
                />
                <p className={`sign-up--status ${
                    isPasswordMatching  ? 
                        'sign-up--status--hidden' 
                        : 
                        ''
                }`}>Passwords did not match</p>

                <FormInput
                    label='Password'
                    name="password"
                    type="password"
                    value={credentials.password}
                    handleChange={handleChange}
                    required={true}
                />

                <FormInput
                    label='Repeat password'
                    name="confirmPassword"
                    type="password"
                    value={credentials.confirmPassword}
                    handleChange={handleChange}
                    required={true}
                />


                <CustomButton type="submit" onSubmit={handleSubmit}>
                    create account
                </CustomButton>
            </form>
        </div>
    )
}

export default SignUp;
