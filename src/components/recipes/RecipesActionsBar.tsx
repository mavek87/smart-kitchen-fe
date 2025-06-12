import Modal from "../../ui/Modal.tsx";
import RecipeEditor from "../recipe/RecipeEditor.tsx";
import {useRef, useState} from "react";

interface RecipesActionsBarProps {
    filterRecipeName: string;
    onChangeFilterRecipeName: (recipeName: string) => void
}

export default function RecipesActionsBar({filterRecipeName, onChangeFilterRecipeName}: RecipesActionsBarProps) {
    const [openModalAddRecipe, setOpenModalAddRecipe] = useState(false);
    const searchRecipeFilterRef = useRef<HTMLInputElement>(null);

    return (
        <div className="flex flex-row gap-5 items-center">

            <button className="min-w-40 outline" onClick={() => setOpenModalAddRecipe(true)}>Add recipe</button>
            <Modal
                title={"Add recipe"}
                content={<RecipeEditor onCloseRecipeEditor={() => setOpenModalAddRecipe(false)}/>}
                isModalOpen={openModalAddRecipe}
                modalWidthSize={"lg"}
                onCloseModal={() => setOpenModalAddRecipe(oldValue => !oldValue)}
            />

            <input
                style={{margin: "0"}}
                type="search"
                placeholder="Filter recipe"
                value={filterRecipeName}
                onChange={(event) => onChangeFilterRecipeName(event.target.value)}
                ref={searchRecipeFilterRef}
            />

        </div>
    );
}