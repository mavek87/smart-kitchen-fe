import Modal from "../../ui/Modal.tsx";
import {useState} from "react";
import IngredientEditor from "../ingredient/IngredientEditor.tsx";
import {useDeleteRecipeByIdMutation} from "../../hooks/useMutations.ts";

interface IngredientManagerProps {
    recipeId: number;
}

export default function IngredientsActionBar({recipeId}: IngredientManagerProps) {
    const [openModalAddIngredient, setOpenModalAddIngredient] = useState(false);
    const [openModalDeleteIngredient, setOpenModalDeleteIngredient] = useState(false);
    const deleteRecipeByIdMutation = useDeleteRecipeByIdMutation();

    const deleteIngredientHandler = () => deleteRecipeByIdMutation.mutate(recipeId);

    return (
        <div className="flex flex-row pl-5 gap-5">
            <button onClick={() => setOpenModalDeleteIngredient(true)}>Delete Recipe</button>
            <Modal
                title={"Delete Recipe"}
                content={
                    <p>
                        Are you sure you want to delete this recipe?
                    </p>
                }
                isModalOpen={openModalDeleteIngredient}
                onCloseModal={() => setOpenModalDeleteIngredient(oldValue => !oldValue)}
                onCancelModal={() => setOpenModalDeleteIngredient(false)}
                onConfirmModal={deleteIngredientHandler}
            />

            <button onClick={() => setOpenModalAddIngredient(true)}>Add Ingredient</button>
            <Modal
                title={"Add ingredient"}
                content={
                    <IngredientEditor
                        recipeId={recipeId}
                        closeIngredientHandler={() => setOpenModalAddIngredient(false)}
                    />
                }
                isModalOpen={openModalAddIngredient}
                modalSize={"large"}
                onCloseModal={() => setOpenModalAddIngredient(oldValue => !oldValue)}
            />
        </div>
    );
};