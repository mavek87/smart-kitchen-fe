import {IngredientOfRecipe} from "../../types";

interface IngredientVisualizerProps {
    ingredient?: IngredientOfRecipe | undefined;
}

export default function IngredientVisualizer({ingredient = undefined}: IngredientVisualizerProps) {
    return (
        <>
            {ingredient && <div>{ingredient.rowIngredient.name} | {ingredient.rowIngredient.id}</div>}
        </>
    );
};