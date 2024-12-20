import Header from "./base/Header.tsx";
import Footer from "./base/Footer.tsx";
import {routes} from "../../router";
import {Link} from "react-router-dom";

export default function ErrorPage() {
    return (
        <div className="container flex flex-col min-h-screen">
            <Header/>
            <main className="flex flex-grow items-center justify-center">
                <section className="text-center">
                    <h1>No page found</h1>
                    <p>Could not find this page...</p>
                    <Link to={routes.ROOT_ROUTE}>Return to homepage</Link>
                </section>
            </main>
            <Footer/>
        </div>
    );
}