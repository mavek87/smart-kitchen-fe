import {AuthUser, Ingredient, IngredientForRecipe, IngredientOfRecipe, Recipe} from "../types";
import {store} from '../state/store';
import {recipesSlice} from "../state/recipesSlice.ts";

// Deprecated
export const fetchIngredients = async (): Promise<Ingredient[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {id: 1, name: 'Farina'},
                {id: 2, name: 'Zucchero'},
                {id: 3, name: 'Uova'},
                {id: 4, name: 'Burro'},
            ]);
        }, 1000); // Simula un ritardo di 1 secondo
    });
};

export const getAuthUser = async (): Promise<AuthUser> => {
    return new Promise((resolve) => {
        resolve(store.getState().authUserState)
    });
};

export const getAllRecipes = async (): Promise<Recipe[]> => {
    return new Promise((resolve) => {
        resolve(store.getState().recipesState.recipes);
    });
};

// export const getRecipesByName = async (recipeName: string): Promise<Recipe[]> => {
//     return new Promise((resolve) => {
//         const lowercaseRecipeName = recipeName?.toLowerCase();
//         console.log("lowercaseRecipeName: " + lowercaseRecipeName)
//
//         const allRecipes = store.getState().recipes;
//         if (lowercaseRecipeName) {
//             const filteredRecipes = allRecipes.filter(recipe => recipeName.includes(recipe.name?.toLowerCase()));
//             console.log(JSON.stringify(filteredRecipes))
//             resolve(filteredRecipes);
//         } else {
//             resolve(allRecipes);
//         }
//     });
// };

export const getRecipesByName = async (recipeName: string): Promise<Recipe[]> => {
    return new Promise((resolve) => {
        const lowercaseRecipeName = recipeName?.toLowerCase();
        // console.log("lowercaseRecipeName: " + lowercaseRecipeName);

        const allRecipes = store.getState().recipesState.recipes;
        if (lowercaseRecipeName) {
            const filteredRecipes = allRecipes.filter(recipe =>
                recipe.name?.toLowerCase().includes(lowercaseRecipeName)
            );
            // console.log("Filtered recipes: ", JSON.stringify(filteredRecipes));
            resolve(filteredRecipes);
        } else {
            resolve(allRecipes);
        }
    });
};

export const getRecipeIngredients = async (recipeId: number): Promise<IngredientOfRecipe[]> => {
    return new Promise((resolve) => {
        const recipe = store.getState().recipesState.recipes.find(recipe => recipe.id === recipeId);
        if (recipe) {
            resolve(recipe.ingredients);
        } else {
            resolve([]);
        }
    });
};

export const addRecipe = async (recipe: Recipe) => {
    const recipeWithId = {...recipe, id: store.getState().recipesState.nextId}
    store.dispatch(recipesSlice.actions.addRecipe(recipeWithId));
};

export const deleteRecipeById = async (recipeId: number) => {
    console.log("deleteRecipeById: " + recipeId);
    store.dispatch(recipesSlice.actions.deleteRecipeById(recipeId));
}

export const addIngredientToRecipe = async (ingredientForRecipe: IngredientForRecipe) => {
    store.dispatch(recipesSlice.actions.addIngredientToRecipe(ingredientForRecipe));
}

export const deleteIngredientFromRecipe = async (ingredientForRecipe: IngredientForRecipe) => {
    store.dispatch(recipesSlice.actions.deleteIngredientFromRecipe(ingredientForRecipe));
}


