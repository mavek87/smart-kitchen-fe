import RecipeManager from "../recipe/RecipeManager.tsx";
import {useGetRecipesByNameQuery} from "../../hooks/useQueries.ts";

interface RecipesVisualizerProps {
    filterRecipeName: string;
}

export default function RecipesVisualizer({filterRecipeName = ""}: RecipesVisualizerProps) {
    const {isPending, error, data: recipes} = useGetRecipesByNameQuery(filterRecipeName);

    if (isPending) return 'Loading...'
    if (error) return `An error has occurred: ${error.message}`

    return (
        <article>
            {
                recipes?.map((recipe) => (
                        <div key={recipe.id}>
                            <RecipeManager recipe={recipe}/>
                        </div>
                    )
                )
            }
        </article>
    );
};