import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../state/store.ts";
import {logoutAuthUser} from "../../state/authUserSlice.ts";
import { NavLink } from 'react-router-dom';
import {routes} from "../../router";
import { useNavigate } from "react-router-dom"

export default function MainMenu() {
    const authUser = useSelector((state: RootState) => state.authUserState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function logoutHandler() {
        dispatch(logoutAuthUser());
        navigate(routes.LOGIN_ROUTE);
    }

    return (
        <>
            {authUser?.isLoggedIn &&
                <article style={{
                    width: "20%",
                    textAlign: "center",
                    paddingTop: "1rem",
                    fontSize: "1.2rem",
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0
                }}>
                    <aside>
                        <nav>
                            <ul>
                                <h2>Menu</h2>
                                <li><NavLink to={routes.RECIPES_ROUTE}>Recipes</NavLink></li>
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