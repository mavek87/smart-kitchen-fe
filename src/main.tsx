import {createRoot} from 'react-dom/client'
import './index.css'
import React from 'react'
import App2 from "./App2.tsx";

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App2 />
    </React.StrictMode>,
);