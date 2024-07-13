import Form from '../components/form/Form';
import '../style/sign-in.css';

function SignIn() {
    return (
        <div>
            <main className='sign-in-main'>
                <section className='sign-in-content'>
                    <i className="fa fa-user-circle"></i>
                    <h1>Sign In</h1>
                    <Form />
                </section>
            </main>
        </div>
    )
}

export default SignIn;