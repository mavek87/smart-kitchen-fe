import React, {forwardRef} from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label?: string;
}

// Utilizziamo forwardRef per accettare la ref come parametro
const Input = forwardRef<HTMLInputElement | null, InputProps>(
    ({id, label, ...restOfProps}, ref = null) => {
        const labelForInput = label ? (
            <label htmlFor={id} className="mr-4 mb-0 w-40 text-left">
                {label}
            </label>
        ) : null;

        return (
            <div className="flex items-center">
                {labelForInput}
                <input style={{marginBottom: '0'}} id={id} ref={ref} {...restOfProps} />
            </div>
        );
    }
);

export default Input;

//
// export default function Input({
//                                   id,
//                                   label,
//                                   ...restOfProps
//                               }: InputProps) {
//
//     const labelForInput = label ?
//         (
//             <label htmlFor={id} className="mr-4 w-40 text-left">{label}</label>
//         )
//         : null;
//
//     return (
//         <div className="flex items-center space-x-2">
//             {labelForInput}
//             <input id={id} {...restOfProps} />
//         </div>
//     );
// }