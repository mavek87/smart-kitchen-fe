import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {IngredientForRecipe, Recipe, RecipesState} from "../types";
import {startingRecipes} from "../data/recipes.ts";

const initialState: RecipesState = startingRecipes;

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        addRecipe: (state, action: PayloadAction<Recipe>) => {
            state.nextId = state.nextId + 1;
            state.recipes.push(action.payload);
        },
        deleteRecipeById: (state, action: PayloadAction<number>) => {
            const recipeId = action.payload;
            state.recipes = state.recipes.filter(currentRecipe => currentRecipe.id !== recipeId);
        },
        addIngredientToRecipe: (state, action: PayloadAction<IngredientForRecipe>) => {
            const recipeId = action.payload.recipeId;
            state.recipes = state.recipes.map(currentRecipe => {
                if (currentRecipe.id === recipeId) {
                    const ingredients = currentRecipe.ingredients;
                    ingredients.push(action.payload.ingredient);
                    return {
                        ...currentRecipe, ingredients
                    };
                } else {
                    return currentRecipe;
                }
            });
        },
        deleteIngredientFromRecipe: (state, action: PayloadAction<IngredientForRecipe>) => {
            const recipeId = action.payload.recipeId;
            const ingredientToRemove = action.payload.ingredient;
            state.recipes = state.recipes.map(currentRecipe => {
                if (currentRecipe.id === recipeId) {
                    const ingredients = currentRecipe.ingredients.filter(currentIngredient => currentIngredient.rowIngredient.id === ingredientToRemove.rowIngredient.id);
                    return {...currentRecipe, ingredients};
                } else {
                    return currentRecipe;
                }
            });
        },
        // TODO: fix
        // updateIngredientFromRecipe: (state, action: PayloadAction<IngredientForRecipe>) => {
        //     const recipeId = action.payload.recipeId;
        //     const ingredientToAdd = action.payload.ingredient;
        //     return state.map(currentRecipe => {
        //         if (currentRecipe.id === recipeId) {
        //             const ingredients = currentRecipe.ingredients.push(ingredientToAdd)
        //             return {...currentRecipe, ingredients};
        //         } else {
        //             return currentRecipe;
        //         }
        //     });
        // }
    },
})

// Action creators are generated for each case reducer function
export const {
    addRecipe,
    deleteRecipeById,
    addIngredientToRecipe,
    deleteIngredientFromRecipe,
    // updateIngredientFromRecipe
} = recipesSlice.actions

export default recipesSlice.reducer