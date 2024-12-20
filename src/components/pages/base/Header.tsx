import HeaderNav from "./HeaderNav.tsx";
import HeaderTitle from "./HeaderTitle.tsx";
import {routes} from "../../../router";
import {useSelector} from "react-redux";
import {RootState} from "../../../state/store.ts";
import AuthUserVisualizer from "../../AuthUserVisualizer.tsx";
import {appName, appVersion} from "../../../constants";

export default function Header() {
    const authUser = useSelector((state: RootState) => state.authUserState)

    return (
        <header className="flex rounded mt-4 mb-0">
            <article className="flex w-screen gap-14 pb-0">
                <HeaderNav routeTo={routes.HOMEPAGE_ROUTE}>
                    <HeaderTitle>{appName}</HeaderTitle>
                </HeaderNav>

                {
                    authUser.isLoggedIn && <div className="ml-auto mr-4"><AuthUserVisualizer/></div>
                }

                <HeaderNav>
                    <article className="pb-4">{appVersion}</article>
                </HeaderNav>
            </article>
        </header>
    );
}