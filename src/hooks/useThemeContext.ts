import {ThemeContext} from "../context/ThemeContextProvider.tsx";
import {useContext} from "react";

export default function useThemeContext() {
    return useContext(ThemeContext);
}