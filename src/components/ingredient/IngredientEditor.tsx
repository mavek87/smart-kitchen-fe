import React, {useRef} from "react";
import Input from "../../ui/Input.tsx";
import {useAddIngredientToRecipeMutation} from "../../hooks/useMutations.ts";

interface IngredientEditorProps {
    recipeId: number;
    closeIngredientHandler: () => void;
}

export default function IngredientEditor({recipeId, closeIngredientHandler}: IngredientEditorProps) {
    const refId = useRef<HTMLInputElement>(null);
    const refName = useRef<HTMLInputElement>(null);

    const addIngredientToRecipeMutation = useAddIngredientToRecipeMutation();

    function saveIngredientHandler(event: React.FormEvent) {
        event.preventDefault();

        const ingredientId = refId.current?.value;
        const ingredientName = refName.current?.value;

        if (ingredientId && ingredientName) {
            addIngredientToRecipeMutation.mutate({
                recipeId: recipeId,
                ingredient: {
                    rowIngredient: {
                        id: +ingredientId,
                        name: ingredientName
                    },
                    quantity: {value: 0, unit: 'g'}
                }
            })
        }

        closeIngredientHandler();
    }

    return (
        <>
            <form>
                <Input
                    id="ingredientId"
                    type="number"
                    label="ingredient ID"
                    defaultValue=""
                    ref={refId}
                />
                <Input
                    id="ingredientName"
                    type="text"
                    label="ingredient name"
                    defaultValue=""
                    ref={refName}
                />
                <button type="submit" onClick={saveIngredientHandler}>Save</button>
            </form>
        </>
    );
};