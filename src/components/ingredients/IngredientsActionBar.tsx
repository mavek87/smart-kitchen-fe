import Modal from "../../ui/Modal.tsx";
import {useState} from "react";
import IngredientEditor from "../ingredient/IngredientEditor.tsx";
import {useDeleteRecipeByIdMutation} from "../../hooks/useMutations.ts";

interface IngredientManagerProps {
    recipeId: number;
}

export default function IngredientsActionBar({recipeId}: IngredientManagerProps) {
    const [openModalAddIngredient, setOpenModalAddIngredient] = useState(false);
    const deleteRecipeByIdMutation = useDeleteRecipeByIdMutation();
    return (
        <div className="flex flex-row pl-5 gap-5 justify-center">
            <button className="max-h-16" onClick={() => deleteRecipeByIdMutation.mutate(recipeId)}>Delete Recipe</button>
            <button className="max-h-16" onClick={() => setOpenModalAddIngredient(true)}>Add Ingredient</button>
            <Modal
                title={"Add ingredient"}
                content={
                    <IngredientEditor
                        recipeId={recipeId}
                        closeIngredientHandler={() => setOpenModalAddIngredient(false)}
                    />
                }
                isModalOpen={openModalAddIngredient}
                onCloseModal={() => setOpenModalAddIngredient(oldValue => !oldValue)}
            />
        </div>
    );
};