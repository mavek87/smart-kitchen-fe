import {useDispatch, useSelector} from "react-redux";
import {logoutAuthUser} from "../state/authUserSlice.ts";
// import RecipesManager from "./recipes/RecipesManager.tsx";
import {RootState} from "../state/store.ts";

export default function AuthUserVisualizer() {
    const authUser = useSelector((state: RootState) => state.authUserState)
    const dispatch = useDispatch();

    function logoutHandler() {
        dispatch(logoutAuthUser())
    }

    return (
        <article className="flex flex-row gap-5 justify-center items-center">
            <div>{JSON.stringify(authUser)}</div>
            <button onClick={logoutHandler}>Logout</button>

            {/*<article>*/}
            {/*    <RecipesManager/>*/}
            {/*</article>*/}

        </article>
    );
};