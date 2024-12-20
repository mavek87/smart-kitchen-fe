import {createBrowserRouter} from "react-router-dom";
import RootPage from "../components/pages/RootPage.tsx";
import HomePage from "../components/pages/HomePage.tsx";
import ErrorPage from "../components/pages/ErrorPage.tsx";

export const routes = {
    ROOT_ROUTE: "/",
    HOMEPAGE_ROUTE: "/",
    LOGIN_ROUTE: "/login",
}

const router = createBrowserRouter([
    {
        path: routes.ROOT_ROUTE,
        element: <RootPage />,
        children: [
            {index: true, element: <HomePage/>},
        //     {path: routes.BLOG_ROUTE, element: <BlogPage/>},
        //     {path: routes.INFINITE_BLOG_ROUTE, element: <InfiniteBlogPage/>},
        //     {path: routes.INFINITE_BUTTON_BLOG_ROUTE, element: <InfiniteButtonBlogPage/>},
        ],
        errorElement: <ErrorPage/>
    }
]);

export default router;