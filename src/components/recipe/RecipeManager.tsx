import {Recipe} from "../../types";
import RecipeVisualizer from "./RecipeVisualizer.tsx";
import IngredientsActionBar from "../ingredients/IngredientsActionBar.tsx";

interface RecipeManagerProps {
    recipe: Recipe;
}

export default function RecipeManager({recipe}: RecipeManagerProps) {
    return (
        <>
            <div className="flex flex-row items-start">
                <RecipeVisualizer recipe={recipe}/>
                <IngredientsActionBar recipe={recipe}/>
            </div>
            <hr className={"mt-6 mb-6"}/>
        </>
    );
};