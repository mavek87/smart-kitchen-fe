import {useDispatch} from "react-redux";
import {useRef, useState} from "react";
import {loginAuthUser} from "../state/authUserSlice.ts";

const defaultUsername = "";
const defaultPassword = "";

export default function LoginForm() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [loginError, setLoginError] = useState("");

    const dispatch = useDispatch();

    function handleClick() {
        const username = usernameRef?.current?.value || '';
        const password = passwordRef?.current?.value || '';

        if (username === defaultUsername && password === defaultPassword) {
            const authUser = {
                username: usernameRef?.current?.value || '',
                email: "matver87@gmail.com",
                isLoggedIn: true
            }
            dispatch(loginAuthUser(authUser))
        } else {
            setLoginError("Username o password errati");
        }
    }

    function resetLoginError() {
        setLoginError("");
    }

    return (
        <article>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username" ref={usernameRef} onChange={resetLoginError}/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" ref={passwordRef} onChange={resetLoginError}/>

            <button onClick={handleClick}> Login</button>

            <br/>
            <br/>

            {loginError && <p><b>{loginError}</b></p>}
        </article>
    );
};