import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userSignIn } from '../../redux/reducers/reducer';

function Form() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Gestion des erreurs
        // Récupération du token
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
            if (response.ok) {
                const data = await response.json();
                const token = data.body.token;
                dispatch(userSignIn(token));
                sessionStorage.setItem("token", token);
                navigate('/user');
            } else {
                setErrorMessage(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='input-wrapper'>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={email} required onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div className='input-wrapper'>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} required onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <div className='input-remember'>
                <input type="checkbox" id="remenber-me"/>
                <label htmlFor="remenber-me">Remember me</label>
            </div>
            {errorMessage && <p className='error-message'>Wrong email or password</p>}
            <button type="submit">Sign In</button>
        </form>
    )
}

export default Form;