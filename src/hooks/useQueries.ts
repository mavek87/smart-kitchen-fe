import {useQuery} from "@tanstack/react-query";
import {fetchIngredients, getAllRecipes, getRecipeIngredients, getRecipesByName} from "../api";

export function useGetIngredientsQuery() {
    return useQuery({
        queryKey: ['ingredients'],
        queryFn: () => fetchIngredients()
    });
}

export function useGetAllRecipesQuery() {
    return useQuery({
        queryKey: ['recipes'],
        queryFn: () => getAllRecipes()
    });
}

// export function useGetRecipesByNameQuery(recipeName: string) {
//     return useQuery({
//         queryKey: ['recipes'],
//         queryFn: () => {
//             console.log("useGetRecipesByNameQuery: " + recipeName)
//             return getRecipesByName(recipeName)
//         },
//     });
// }

export const useGetRecipesByNameQuery = (recipeName: string) => {
    return useQuery({
        queryKey: ["recipes", {recipeName: recipeName}],
        queryFn: () => getRecipesByName(recipeName)
    });
};

export function useGetRecipeIngredients(recipeId: number) {
    return useQuery({
        queryKey: ['recipes', {recipeId: recipeId}],
        queryFn: () => getRecipeIngredients(recipeId)
    });
}