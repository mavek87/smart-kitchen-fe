// import {ChangeEvent, SelectHTMLAttributes} from "react";
// import {logComponentRenderingProps} from "../../utils/log.ts";
//
// export interface ComboboxDataItem {
//     id: string;
//     text: string;
// }
//
// export interface ComboboxChangeSelectedItem {
//     selectId: string;
//     optionValue: string;
//     optionText: string;
// }
//
// interface ComboboxProps<T extends ComboboxDataItem> extends SelectHTMLAttributes<HTMLSelectElement> {
//     id?: string;
//     data: T[];
//     label?: string;
//     onChangeSelectionHandler?: (selectedItem: ComboboxChangeSelectedItem) => void;
//     selectClassName?: string;
//     optionClassName?: string;
// }
//
// export default function Combobox<T extends ComboboxDataItem>(props: ComboboxProps<T>) {
//     logComponentRenderingProps(props);
//
//     const {
//         id = uuid.v4(),
//         data,
//         label,
//         onChangeSelectionHandler = () => {
//         },
//         selectClassName,
//         optionClassName,
//         ...restOfProps
//     } = props;
//
//     const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
//         event.preventDefault();
//
//         const target = event.target;
//         const {id, value, selectedIndex} = target;
//         const text = target.options[selectedIndex].text;
//
//         onChangeSelectionHandler({selectId: id, optionValue: value, optionText: text});
//     };
//
//     return (
//         <div className="flex items-center space-x-6">
//             {label && <label htmlFor={id}>{label}</label>}
//             <select
//                 id={id}
//                 onChange={onChangeSelect}
//                 className={selectClassName}
//                 value={QuantityUnit.l}
//                 {...restOfProps}
//             >
//                 {data.map((element) => (
//                     <option
//                         value={element.id}
//                         key={`${id}_${element.id}`}
//                         className={optionClassName}
//                     >
//                         {element.text}
//                     </option>
//                 ))}
//             </select>
//         </div>
//     );
// }