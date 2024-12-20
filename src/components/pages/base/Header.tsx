import moonImage from "../../../assets/moon.svg";
import sunImage from "../../../assets/sun.svg";
import HeaderNav from "./HeaderNav.tsx";
import HeaderTitle from "./HeaderTitle.tsx";
import {routes} from "../../../router";
import {useSelector} from "react-redux";
import {RootState} from "../../../state/store.ts";
import AuthUserVisualizer from "../../AuthUserVisualizer.tsx";
import {APP_NAME, APP_VERSION, LIGHT_THEME} from "../../../constants";
import useThemeContext from "../../../hooks/useThemeContext.ts";

export default function Header() {
    const {theme, toggleTheme} = useThemeContext();
    const authUser = useSelector((state: RootState) => state.authUserState)

    const isThemeLight = theme === LIGHT_THEME;
    const themeIcon = isThemeLight ? moonImage : sunImage;

    return (
        <header className="flex rounded mt-4 mb-0">
            <article className="flex w-screen gap-14 pb-0">

                <HeaderNav routeTo={routes.HOMEPAGE_ROUTE} className={"flex col items-center"}>
                    <HeaderTitle>{APP_NAME}</HeaderTitle>
                </HeaderNav>

                <HeaderNav>
                    <div className="pb-7">{APP_VERSION}</div>
                </HeaderNav>

                <div className={"bg-transparent flex col items-center pb-4"} onClick={toggleTheme}>
                    <img src={themeIcon} alt="theme icon" className="size-8"
                         style={{borderRadius: "15%"}}/>
                </div>

                {
                    authUser.isLoggedIn && <div className="ml-auto mr-4 flex col"><AuthUserVisualizer/></div>
                }

            </article>
        </header>
    );
}