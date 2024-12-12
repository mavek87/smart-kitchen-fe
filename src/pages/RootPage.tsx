import {Outlet} from "react-router-dom";
import Header from "../components/pages/Header.tsx";
import Footer from "../components/pages/Footer.tsx";

export default function RootPage() {
    return (
        <div className="container flex flex-col min-h-screen">
            <Header/>
            <main className="flex-grow flex items-center justify-center">
            {/*<main>*/}
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}