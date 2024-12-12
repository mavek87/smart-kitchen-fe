import Input from "../../ui/Input.tsx";
import {Recipe} from "../../types";
import IngredientsVisualizer from "../ingredients/IngredientsVisualizer.tsx";

interface RecipeVisualizerProps {
    recipe: Recipe;
}

export default function RecipeVisualizer({recipe}: RecipeVisualizerProps) {
    return (
        <div className="flex flex-col flex-1">
            <Input
                id="recipeNameVisualizer"
                type="text"
                label="Recipe"
                value={recipe.name}
                readOnly={true}
            />
            <IngredientsVisualizer ingredients={recipe.ingredients}/>
        </div>
    );
};