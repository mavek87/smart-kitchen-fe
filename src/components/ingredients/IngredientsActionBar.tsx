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
        <div className="flex flex-col pl-5 gap-5">
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
                modalWidthSize={"xl"}
                onCloseModal={() => setOpenModalAddIngredient(oldValue => !oldValue)}
            />

            <button onClick={() => setOpenModalDeleteIngredient(true)}>Delete Recipe</button>
            <Modal
                title={"Delete Recipe"}
                content={
                    <div>
                        Are you sure you want to delete this recipe?
                    </div>
                }
                isModalOpen={openModalDeleteIngredient}
                onCloseModal={() => setOpenModalDeleteIngredient(oldValue => !oldValue)}
                onCancelModal={() => setOpenModalDeleteIngredient(false)}
                onConfirmModal={deleteIngredientHandler}
            />
        </div>
    );
};