import Modal from "../../ui/Modal.tsx";
import RecipeEditor from "../recipe/RecipeEditor.tsx";
import {useEffect, useRef, useState} from "react";

interface RecipesActionsBarProps {
    filterRecipeName: string;
    onChangeFilterRecipeName: (recipeName: string) => void
}

export default function RecipesActionsBar({filterRecipeName, onChangeFilterRecipeName}: RecipesActionsBarProps) {
    const [isSearchRecipeFilterOn, setIsSearchRecipeFilterOn] = useState(false);
    const [openModalAddRecipe, setOpenModalAddRecipe] = useState(false);
    const searchRecipeFilterRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isSearchRecipeFilterOn) {
            searchRecipeFilterRef?.current?.focus();
        }
    }, [isSearchRecipeFilterOn]);

    const switchSearchRecipeFilterModeHandler = () => {
        onChangeFilterRecipeName("");
        setIsSearchRecipeFilterOn(oldIsSearchRecipe => !oldIsSearchRecipe)
    }

    return (
        <div className="flex flex-row gap-5 items-center">

            <button className="min-w-40" onClick={() => setOpenModalAddRecipe(true)}>Add recipe</button>
            <Modal
                title={"Add recipe"}
                content={<RecipeEditor onCloseRecipeEditor={() => setOpenModalAddRecipe(false)}/>}
                isModalOpen={openModalAddRecipe}
                modalWidthSize={"lg"}
                onCloseModal={() => setOpenModalAddRecipe(oldValue => !oldValue)}
            />

            <button className="min-w-40" onClick={switchSearchRecipeFilterModeHandler}>
                {isSearchRecipeFilterOn ? "Remove filter" : "Filter recipes"}
            </button>
            {
                isSearchRecipeFilterOn &&
                <input
                    style={{margin: "0"}}
                    type="text"
                    placeholder="Search recipe"
                    value={filterRecipeName}
                    onChange={(event) => onChangeFilterRecipeName(event.target.value)}
                    ref={searchRecipeFilterRef}
                />
            }

        </div>
    );
}
;