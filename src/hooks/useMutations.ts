import {useMutation, useQueryClient} from "@tanstack/react-query";
import {addIngredientToRecipe, addRecipe, deleteRecipeById} from "../api";

export function useAddRecipeMutation() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addRecipe,
        onSuccess: () => queryClient.invalidateQueries({queryKey: ["recipes"]})
    });
}

export function useAddIngredientToRecipeMutation() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addIngredientToRecipe,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["ingredients"]});
            queryClient.invalidateQueries({queryKey: ["recipes"]});
        }
    });
}

export function useDeleteRecipeByIdMutation() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteRecipeById,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["recipes"]});
        }
    });
}