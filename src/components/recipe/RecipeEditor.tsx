import {useAddRecipeMutation} from "../../hooks/useMutations.ts";
import React, {useRef} from "react";
import Input from "../../ui/Input.tsx";

interface RecipeEditorProps {
    onCloseRecipeEditor: () => void;
}

export default function RecipeEditor({onCloseRecipeEditor}: RecipeEditorProps) {
    const refId = useRef<HTMLInputElement>(null);
    const refName = useRef<HTMLInputElement>(null);

    const addRecipeMutation = useAddRecipeMutation();

    function saveRecipeHandler(event: React.FormEvent) {
        event.preventDefault();

        const recipeId = refId.current?.value;
        const recipeName = refName.current?.value;

        console.log(`recipe id: ${recipeId}, recipe name: ${recipeName}`)

        if (recipeId && recipeName) {
            addRecipeMutation.mutate(
                {
                    id: +recipeId,
                    name: recipeName,
                    ingredients: []
                }
            )
        }

        onCloseRecipeEditor();
    }

    return (
        <>
            <form>
                <Input
                    id="recipeId"
                    type="number"
                    // label="Recipe ID"
                    placeholder="recipe id"
                    defaultValue={-1}
                    ref={refId}
                    hidden
                />
                <Input
                    id="recipeName"
                    type="text"
                    label="Recipe name"
                    placeholder="recipe name"
                    defaultValue=""
                    ref={refName}
                />
                <button type="submit" onClick={saveRecipeHandler}>Save</button>
            </form>
        </>
    );
};