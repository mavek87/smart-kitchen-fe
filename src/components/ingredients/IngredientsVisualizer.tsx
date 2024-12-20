import {IngredientOfRecipe} from "../../types";
import IngredientVisualizer from "../ingredient/IngredientVisualizer.tsx";

interface IngredientsVisualizerProps {
    ingredients: IngredientOfRecipe[];
}

export default function IngredientsVisualizer({ingredients}: IngredientsVisualizerProps) {
    const ingredientsListJsx = ingredients?.map((ingredient => <li key={ingredient.rowIngredient.id}>
        <IngredientVisualizer ingredient={ingredient}/>
    </li>));

    const ingredientsView = ingredients && ingredients.length > 0
        ? <details className="mt-6" open>
            <summary>Ingredients ({ingredients.length}):</summary>
            <ul>{ingredientsListJsx}</ul>
        </details>
        : null

    return (
        <>
            {ingredientsView}
        </>
    );
};