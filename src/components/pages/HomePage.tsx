import {Outlet} from "react-router-dom";

export default function HomePage() {
    return (
        <section className="flex flex-grow mb-0">
            <article className="w-full" style={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}>
                <Outlet />
            </article>
        </section>
    );
}