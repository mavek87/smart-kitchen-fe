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
            <div className="flex flex-col md:flex-row md:items-center md:justify-between px-0.5 rounded-md shadow-sm mb-6 gap-2 md:gap-0">
                <h2 className="text-xxl font-semibold">
                    Recipes ({recipes?.length})
                </h2>
                <div className="mt-2 md:mt-0">
                    <RecipesActionsBar
                        filterRecipeName={filterRecipeName}
                        onChangeFilterRecipeName={changeFilterRecipeNameHandler}
                    />
                </div>
            </div>

            {/*<hr />*/}

            <RecipesVisualizer filterRecipeName={debouncedFilterRecipeName} />
        </div>
    );

    // return (
    //     <div>
    //         <div className="flex items-center justify-between px-4 py-2 rounded-md shadow-sm mb-4">
    //             <h2 className="text-xxl font-semibold">
    //                 Recipes ({recipes?.length})
    //             </h2>
    //             <div className="flex items-center gap-3">
    //                 <RecipesActionsBar
    //                     filterRecipeName={filterRecipeName}
    //                     onChangeFilterRecipeName={changeFilterRecipeNameHandler}
    //                 />
    //             </div>
    //         </div>
    //
    //         {/*<hr className="mb-6 border-gray-300" />*/}
    //
    //         <RecipesVisualizer filterRecipeName={debouncedFilterRecipeName}/>
    //     </div>
    // );

    // return (
    //     <div>
    //         <div className="flex items-center justify-between mb-4">
    //             <h2 className="">
    //                 Recipes ({recipes?.length})
    //             </h2>
    //             <RecipesActionsBar
    //                 filterRecipeName={filterRecipeName}
    //                 onChangeFilterRecipeName={changeFilterRecipeNameHandler}
    //             />
    //         </div>
    //
    //         <hr className="mb-4" />
    //
    //         <RecipesVisualizer filterRecipeName={debouncedFilterRecipeName} />
    //     </div>
    // );

    // return (
    //     <div>
    //         <h2>Recipes ({recipes?.length})</h2>
    //         {/*<br/>*/}
    //         <RecipesActionsBar
    //             filterRecipeName={filterRecipeName}
    //             onChangeFilterRecipeName={changeFilterRecipeNameHandler}
    //         />
    //
    //         <br/>
    //         <hr/>
    //
    //         <RecipesVisualizer filterRecipeName={debouncedFilterRecipeName}/>
    //     </div>
    // );
};