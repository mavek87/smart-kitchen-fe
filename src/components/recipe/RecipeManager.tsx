import {Recipe} from "../../types";
import RecipeVisualizer from "./RecipeVisualizer.tsx";
import IngredientsActionBar from "../ingredients/IngredientsActionBar.tsx";

interface RecipeManagerProps {
    recipe: Recipe;
}

export default function RecipeManager({recipe}: RecipeManagerProps) {
    return (
        <div className="flex flex-row">
            <RecipeVisualizer recipe={recipe}/>
            <IngredientsActionBar recipeId={recipe.id}/>
            <hr/>
        </div>
    );
};