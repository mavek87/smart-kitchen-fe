import './App.css'
import AuthUserVisualizer from "./components/AuthUserVisualizer.tsx";
import LoginForm from "./components/LoginForm.tsx";
import {useSelector} from "react-redux";
import {RootState} from "./state/store.ts";

function App() {
    const authUser = useSelector((state: RootState) => state.authUserState)

    return (
        <>
            {authUser?.isLoggedIn ? <AuthUserVisualizer/> : <LoginForm/>}
        </>
    )
}

export default App