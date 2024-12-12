// import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import {Provider} from "react-redux";
import {store} from "./state/store.ts";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import router from "./router";
import {RouterProvider} from "react-router-dom";

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
    // <StrictMode>
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
                {/*<App/>*/}
        </QueryClientProvider>
    </Provider>
// </StrictMode>,
)
