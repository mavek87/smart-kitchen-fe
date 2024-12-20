import './App.css'
import {Provider} from "react-redux";
import {store} from "./state/store.ts";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {RouterProvider} from "react-router-dom";
import router from "./router";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import ThemeContextProvider from "./context/ThemeContextProvider.tsx";

const queryClient = new QueryClient({
    defaultOptions: {
        // queries: {
        // refetchOnWindowFocus: false,
        // retry: 5,
        // gcTime: 0
        // }
    }
});

export default function App() {
    // const authUser = useSelector((state: RootState) => state.authUserState)
    //
    // return (
    //     <>
    //         {authUser?.isLoggedIn ? <AuthUserVisualizer/> : <LoginForm/>}
    //     </>
    // )

    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ThemeContextProvider>
                    <RouterProvider router={router}/>
                    <ReactQueryDevtools initialIsOpen={false}/>
                </ThemeContextProvider>
            </QueryClientProvider>
        </Provider>
    );
}