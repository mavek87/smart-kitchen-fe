import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../state/store.ts";
import {logoutAuthUser} from "../../state/authUserSlice.ts";

export default function MainMenu() {
    const authUser = useSelector((state: RootState) => state.authUserState);
    const dispatch = useDispatch();

    function logoutHandler() {
        dispatch(logoutAuthUser());
    }

    return (
        <>
            {authUser?.isLoggedIn &&
                <article style={{
                    width: "20%",
                    textAlign: "center",
                    paddingTop: ".5rem",
                    fontSize: "1.2rem",
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0
                }}>
                    <aside>
                        <nav>
                            <ul>
                                <li><h2>Menu</h2></li>
                                <li><a href="#">Recipes</a></li>
                                <li><a href="#">Ingredients</a></li>
                                <li><a href="#">Meal plan</a></li>
                                <li><a href="#">Settings</a></li>
                                <li><a onClick={logoutHandler}>Logout</a></li>
                            </ul>
                        </nav>
                    </aside>
                </article>
            }
        </>
    );
}