import React, {ReactNode} from "react";
import {Link} from "react-router-dom";

interface HeaderNavProps extends React.ComponentPropsWithoutRef<"nav"> {
    children: ReactNode;
    routeTo ?: null | string;
}

export default function HeaderNav({children, routeTo = null, ...rest}: HeaderNavProps) {
    return (
        <nav {...rest} className="flex flex-row justify-center items-center">
            {routeTo
                ?
                <Link to={routeTo} className="pt-4 pb-1 no-underline">
                    {children}
                </Link>
                :
                <a className="pt-4 pb-1 no-underline">
                    {children}
                </a>
            }

        </nav>
    );
}