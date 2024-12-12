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
        ? <div className="mt-6">
            <h6>Ingredients:</h6>
            <ul>{ingredientsListJsx}</ul>
        </div>
        : null

    return (
        <>
            {ingredientsView}
        </>
    );
};