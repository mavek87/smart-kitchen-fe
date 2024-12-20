import {useSelector} from "react-redux";
import {RootState} from "../../state/store.ts";
import RecipesManager from "../recipes/RecipesManager.tsx";
import LoginForm from "../LoginForm.tsx";

export default function HomePage() {
    const authUser = useSelector((state: RootState) => state.authUserState)

    return (
        <section className="flex-grow flex items-center justify-center mb-0">
            <article className="w-full">
                {authUser?.isLoggedIn ? <RecipesManager/> : <LoginForm/>}
            </article>
        </section>
    );
}