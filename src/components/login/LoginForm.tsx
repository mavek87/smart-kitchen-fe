import {useDispatch} from "react-redux";
import React, {useRef, useState} from "react";
import {loginAuthUser} from "../../state/authUserSlice.ts";
import { useNavigate } from "react-router-dom"
import {routes} from "../../router";

const defaultUsername = "1";
const defaultPassword = "1";

export default function LoginForm() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [loginError, setLoginError] = useState("");
    const [isInvalidUser, setIsInvalidUser] = useState<undefined | boolean>(undefined);
    const [isInvalidPass, setIsInvalidPass] = useState<undefined | boolean>(undefined);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            dispatch(loginAuthUser(authUser));
            navigate(routes.DASHBOARD_RECIPES_ROUTE);
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

                <fieldset>

                <label htmlFor="login_password">Password</label>
                <input
                    type="password"
                    name="login_password"
                    placeholder="password"
                    aria-label="Password"
                    aria-invalid={isInvalidPass}
                    aria-describedby="login-error-helper"
                    ref={passwordRef}
                    onChange={resetLoginError}
                    required
                />
                    {loginError &&
                        <small id="login-error-helper">{loginError}</small>}
                </fieldset>

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

                <button type="submit" onClick={handleClick}> Login</button>

            </form>
        </article>
    );
};