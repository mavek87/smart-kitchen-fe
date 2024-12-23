import { useSelector} from "react-redux";
// import RecipesManager from "./recipes/RecipesManager.tsx";
import {RootState} from "../state/store.ts";

export default function AuthUserVisualizer() {
    const authUser = useSelector((state: RootState) => state.authUserState)

    return (
        <article className="flex flex-row gap-5 justify-center items-center">
            <div>{JSON.stringify(authUser)}</div>

            {/*<article>*/}
            {/*    <RecipesManager/>*/}
            {/*</article>*/}

        </article>
    );
};