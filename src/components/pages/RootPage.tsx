import Header from "./base/Header.tsx";
import Footer from "./base/Footer.tsx";
import MainPage from "./MainPage.tsx";

export default function RootPage() {
    return (
        <div className="container flex flex-col min-h-screen">
            <Header/>
            <MainPage />
            <Footer/>
        </div>
    );
}