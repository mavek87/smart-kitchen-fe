import MainMenu from "./MainMenu.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../state/store.ts";
import LoginForm from "../login/LoginForm.tsx";
import HomePage from "./HomePage.tsx";

export default function MainPage() {
    const authUser = useSelector((state: RootState) => state.authUserState);
    const isUserLoggedIn = authUser?.isLoggedIn;
    return (
        <main className={`flex-grow flex ${isUserLoggedIn ? "" : "items-center"} justify-center`}>
            <div className={`flex flex-row ${isUserLoggedIn ? "w-full" : ""}`}>
                {authUser?.isLoggedIn
                    ? <>
                        <MainMenu/>
                        <HomePage/>
                    </>
                    : <LoginForm/>
                }
            </div>
        </main>
    );
};