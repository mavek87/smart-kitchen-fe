import {createBrowserRouter} from "react-router-dom";
import RootPage from "../components/pages/RootPage.tsx";
// import HomePage from "../components/pages/HomePage.tsx";
import ErrorPage from "../components/pages/ErrorPage.tsx";
import RecipesManager from "../components/recipes/RecipesManager.tsx";
import LoginForm from "../components/login/LoginForm.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";

const rootRoute = "/";
const loginRoute = "/login";
const dashboardRoute = "/dashboard";
const recipesRoute = dashboardRoute + "/recipes";

export const routes = {
    ROOT_ROUTE: rootRoute,
    HOMEPAGE_ROUTE: rootRoute,
    LOGIN_ROUTE: loginRoute,
    DASHBOARD_ROUTE: dashboardRoute,
    RECIPES_ROUTE: recipesRoute,
}

const router = createBrowserRouter([
    {
        path: routes.ROOT_ROUTE,
        element: <RootPage/>,
        children: [
            // {index: true, element: <HomePage/>},
            {path: routes.LOGIN_ROUTE, element: <LoginForm/>},
            {
                path: "/dashboard", element: <ProtectedRoute/>, children: [
                    {path: routes.RECIPES_ROUTE, element: <RecipesManager/>},
                ]
            }
            //     {path: routes.BLOG_ROUTE, element: <BlogPage/>},
            //     {path: routes.INFINITE_BLOG_ROUTE, element: <InfiniteBlogPage/>},
            //     {path: routes.INFINITE_BUTTON_BLOG_ROUTE, element: <InfiniteButtonBlogPage/>},
        ],
        errorElement: <ErrorPage/>
    }
]);

export default router;