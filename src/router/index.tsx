import {createBrowserRouter} from "react-router-dom";
import RootPage from "../components/pages/RootPage.tsx";
// import HomePage from "../components/pages/HomePage.tsx";
import ErrorPage from "../components/pages/ErrorPage.tsx";
import RecipesManager from "../components/recipes/RecipesManager.tsx";
import LoginForm from "../components/login/LoginForm.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import SettingsPage from "../components/pages/settings/SettingsPage.tsx";
import IngredientsPage from "../components/pages/ingredients/IngredientsPage.tsx";
import MealPlanPage from "../components/pages/meal_plan/MealPlanPage.tsx";

const rootRoute = "/";
const loginRoute = "/login";

const dashboardRoute = "/dashboard";
const dashboardRecipesRoute = dashboardRoute + "/recipes";
const dashboardIngredientsRoute = dashboardRoute + "/ingredients";
const dashboardMealPlanRoute = dashboardRoute + "/mealplan";
const dashboardSettingsRoute = dashboardRoute + "/settings";

export const routes = {
    ROOT_ROUTE: rootRoute,
    HOMEPAGE_ROUTE: rootRoute,
    LOGIN_ROUTE: loginRoute,
    DASHBOARD_ROUTE: dashboardRoute,
    DASHBOARD_RECIPES_ROUTE: dashboardRecipesRoute,
    DASHBOARD_INGREDIENTS_ROUTE: dashboardIngredientsRoute,
    DASHBOARD_MEALPLAN_ROUTE: dashboardMealPlanRoute,
    DASHBOARD_SETTINGS_ROUTE: dashboardSettingsRoute,
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
                    {index: true, path: routes.DASHBOARD_RECIPES_ROUTE, element: <RecipesManager/>},
                    {path: routes.DASHBOARD_INGREDIENTS_ROUTE, element: <IngredientsPage/>},
                    {path: routes.DASHBOARD_MEALPLAN_ROUTE, element: <MealPlanPage/>},
                    {path: routes.DASHBOARD_SETTINGS_ROUTE, element: <SettingsPage/>},
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