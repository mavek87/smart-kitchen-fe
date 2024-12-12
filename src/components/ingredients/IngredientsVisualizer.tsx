import {IngredientOfRecipe} from "../../types";
import IngredientVisualizer from "../ingredient/IngredientVisualizer.tsx";

interface IngredientsVisualizerProps {
    ingredients: IngredientOfRecipe[];
}

export default function IngredientsVisualizer({ingredients}: IngredientsVisualizerProps) {
    return (
        <>
            {ingredients && ingredients.length > 0 && <h6>Ingredients:</h6>}
            <ul>
                {ingredients.map(ingredient => <li key={ingredient.rowIngredient.id}>
                    <IngredientVisualizer ingredient={ingredient}/>
                </li>)}
            </ul>
        </>
    );
};