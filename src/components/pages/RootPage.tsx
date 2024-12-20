import {Outlet} from "react-router-dom";
import Header from "./base/Header.tsx";
import Footer from "./base/Footer.tsx";

export default function RootPage() {
    return (
        <div className="container flex flex-col min-h-screen">
            <Header/>
            <main className="flex-grow flex items-center justify-center">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}