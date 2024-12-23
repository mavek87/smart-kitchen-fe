import {useSelector} from "react-redux";
import {RootState} from "../../state/store.ts";
import RecipesManager from "../recipes/RecipesManager.tsx";
import LoginForm from "../login/LoginForm.tsx";

export default function HomePage() {
    const authUser = useSelector((state: RootState) => state.authUserState)

    return (
        <section className="flex-grow flex justify-center mb-0">
            <article className="w-full" style={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}>
                {authUser?.isLoggedIn ? <RecipesManager/> : <LoginForm/>}
            </article>
        </section>
    );
}