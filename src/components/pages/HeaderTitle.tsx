import React, {ReactNode} from "react";

interface Props extends React.ComponentPropsWithoutRef<"h1"> {
    children: ReactNode;
}

export default function HeaderTitle({children, ...rest}: Props) {
    return (
       <h1 className="p-0 pb-4 ml-0 mr-0" {...rest} >{children}</h1>
    );
}