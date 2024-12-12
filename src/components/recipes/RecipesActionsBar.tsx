import Modal from "../../ui/Modal.tsx";
import RecipeEditor from "../recipe/RecipeEditor.tsx";
import {useState} from "react";

interface RecipesActionsBarProps {
    filterRecipeName: string;
    onChangeFilterRecipeName: (recipeName: string) => void
}

export default function RecipesActionsBar({filterRecipeName, onChangeFilterRecipeName}: RecipesActionsBarProps) {
    const [openModalAddRecipe, setOpenModalAddRecipe] = useState(false);

    return (
        <div className="flex flex-row gap-5">

            <input
                className="mt-4"
                type="text"
                placeholder="Search recipe"
                value={filterRecipeName}
                onChange={(event) => onChangeFilterRecipeName(event.target.value)}
            />

            <button className="min-w-40" onClick={() => setOpenModalAddRecipe(true)}>Add recipe</button>
            <Modal
                title={"Add recipe"}
                content={<RecipeEditor onCloseRecipeEditor={() => setOpenModalAddRecipe(false)}/>}
                isModalOpen={openModalAddRecipe}
                onCloseModal={() => setOpenModalAddRecipe(oldValue => !oldValue)}
            />

        </div>
    );
};