import {Navigate, useOutlet} from "react-router-dom";
import {routes} from "./index.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../state/store.ts";

// interface ProtectedRouteProps {
//     children: React.ReactNode;
// }

// export default function ProtectedRoute({children}: ProtectedRouteProps) {
export default function ProtectedRoute() {
    console.log("Rendering protected route");

    const outlet = useOutlet();
    const authUser = useSelector((state: RootState) => state.authUserState);
    const isUserLoggedIn = authUser?.isLoggedIn;

    if (isUserLoggedIn) {
        console.log("User logged in, rendering children...");

        return (<>{outlet}</>);
    } else {
        console.log("User NOT logged in, rendering login route...");

        return <Navigate to={routes.LOGIN_ROUTE}/>;
    }
};