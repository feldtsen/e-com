import '../sign-up-or-sign-in.styles.scss';

const SignUp = () => {


    return (
        <div className="sign-up"
            onClick={e => e.stopPropagation()}>
            Sign up page
        </div>
    )
}

export default SignUp;
