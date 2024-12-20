import RecipesVisualizer from "./RecipesVisualizer.tsx";
import RecipesActionsBar from "./RecipesActionsBar.tsx";
import {useState} from "react";
import useDebounce from "../../hooks/useDebounce.ts";
import {useGetAllRecipesQuery} from "../../hooks/useQueries.ts";

export default function RecipesManager() {
    const [filterRecipeName, setFilterRecipeName] = useState("");
    const debouncedFilterRecipeName = useDebounce(filterRecipeName, 750);

    const {data: recipes} = useGetAllRecipesQuery();

    function changeFilterRecipeNameHandler(changedFilterRecipeName: string) {
        setFilterRecipeName(changedFilterRecipeName);
    }

    return (
        <div>
            <h2>Recipes ({recipes?.length})</h2>
            <br/>

            <RecipesActionsBar
                filterRecipeName={filterRecipeName}
                onChangeFilterRecipeName={changeFilterRecipeNameHandler}
            />

            <br/>
            <hr/>

            <RecipesVisualizer filterRecipeName={debouncedFilterRecipeName}/>
        </div>
    );
};