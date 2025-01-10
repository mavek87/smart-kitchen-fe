import {IngredientOfRecipe} from "../../types";
import IngredientVisualizer from "../ingredient/IngredientVisualizer.tsx";
import Accordion from "../../ui/Accordion.tsx";

interface IngredientsVisualizerProps {
    ingredients: IngredientOfRecipe[];
}

export default function IngredientsVisualizer({ingredients}: IngredientsVisualizerProps) {
    const ingredientsListJsx = ingredients?.map(ingredient => <li key={ingredient.rowIngredient.id}>
            <IngredientVisualizer ingredient={ingredient}/>
        </li>
    );

    const ingredientsView = ingredients && ingredients.length > 0
        ? <Accordion
            className="mt-4"
            title={`Ingredients (${ingredients.length}):`}
            content={<ul>{ingredientsListJsx}</ul>}
        />
        : null

    return (
        <>
            {ingredientsView}
        </>
    );
};