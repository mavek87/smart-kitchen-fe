import {useSelector} from "react-redux";
import {RootState} from "../../state/store.ts";
import RecipesManager from "../recipes/RecipesManager.tsx";
import LoginForm from "../LoginForm.tsx";

export default function HomePage() {
    const authUser = useSelector((state: RootState) => state.authUserState)

    return (
        // <article className=" w-full">
        <section className="flex-grow flex items-center justify-center">
            <article className=" w-full">
                {authUser?.isLoggedIn ? <RecipesManager/> : <LoginForm/>}
            </article>
        </section>
    );
}