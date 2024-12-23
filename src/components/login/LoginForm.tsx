import {useDispatch} from "react-redux";
import {useRef, useState} from "react";
import {loginAuthUser} from "../../state/authUserSlice.ts";

const defaultUsername = "1";
const defaultPassword = "1";

export default function LoginForm() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [loginError, setLoginError] = useState("");
    const [isInvalidUser, setIsInvalidUser] = useState<undefined | boolean>(undefined);
    const [isInvalidPass, setIsInvalidPass] = useState<undefined | boolean>(undefined);
    const dispatch = useDispatch();

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        const username = usernameRef?.current?.value || '';
        const password = passwordRef?.current?.value || '';

        if (username === defaultUsername && password === defaultPassword) {
            const authUser = {
                username,
                email: "matver87@gmail.com",
                isLoggedIn: true
            }
            dispatch(loginAuthUser(authUser))
        } else {
            setLoginError("Wrong username or password");
            setIsInvalidUser(true);
            setIsInvalidPass(true);
        }
    }

    function resetLoginError() {
        setLoginError("");
        setIsInvalidUser(undefined)
        setIsInvalidPass(undefined)
    }

    return (
        <article style={{minWidth: "480px"}}>
            <h1>Sign in</h1>

            <form>
                <label htmlFor="login_username">Username</label>
                <input
                    type="text"
                    name="login_username"
                    placeholder="username"
                    aria-label="Username"
                    aria-invalid={isInvalidUser}
                    ref={usernameRef}
                    onChange={resetLoginError}
                    required
                />

                <label htmlFor="login_password">Password</label>
                <input
                    type="password"
                    name="login_password"
                    placeholder="password"
                    aria-label="Password"
                    aria-invalid={isInvalidPass}
                    ref={passwordRef}
                    onChange={resetLoginError}
                    required
                />

                <fieldset>
                    <label htmlFor="login_remember_me">
                        <input type="checkbox"
                               role="switch"
                               id="login_remember_me"
                               name="login_remember_me"
                               aria-label="Remember me"
                        />
                        Remember me
                    </label>
                </fieldset>

                <button type="submit" className={"mb-0"} onClick={handleClick}> Login</button>

                <br/>
                <br/>

                {loginError && <small className={"text-red-700"}><b>{loginError}</b></small>}

            </form>
        </article>
    );
};