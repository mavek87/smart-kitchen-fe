import {useSelector} from "react-redux";
import {RootState} from "../../state/store.ts";
import RecipesManager from "../recipes/RecipesManager.tsx";
import LoginForm from "../login/LoginForm.tsx";

export default function HomePage() {
    const authUser = useSelector((state: RootState) => state.authUserState)

    return (
        <section className="flex-grow flex justify-center mb-0">
            {authUser?.isLoggedIn &&
                <article style={{width: "25%", textAlign: "center", paddingTop: ".5rem", fontSize: "1.2rem", borderTopRightRadius: 0, borderBottomRightRadius: 0}}>
                    <aside>
                        <nav>
                            <ul>
                                <li><h2>Menu</h2></li>
                                <li><a href="#">Recipes</a></li>
                                <li><a href="#">Ingredients</a></li>
                                <li><a href="#">Meal plan</a></li>
                                <li><a href="#">Settings</a></li>
                                <li><a href="#">Logout</a></li>
                            </ul>
                        </nav>
                    </aside>
                </article>
            }
            <article className="w-full" style={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}>
                {authUser?.isLoggedIn ? <RecipesManager/> : <LoginForm/>}
            </article>
        </section>
    );
}