import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const CreateAccountPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");


    const navigate = useNavigate();

    const createAccount = async () => {
        try {
            if (password !== confirmPassword) {
                setError("Passwords don't match!");
                return ;
            }
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate("/articles");
        } catch(e) {
            setError(e.message);
        }
    }
     
    return (
        <>
        <h1>Create Login</h1>

        {error && <p className="error">{error}</p>}

        <input
        placeholder="name@mail.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
        <input
        placeholder="Your password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        type="password" />

        <input
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        type="password" />

        <button onClick={createAccount}>Sign Up</button>
        <Link to="/login">Already Have an account? Login in here</Link>
        </>
    );
}

export default CreateAccountPage;