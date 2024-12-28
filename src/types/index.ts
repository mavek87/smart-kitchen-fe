export interface Ingredient {
    id: number | string,
    name: string
}

export interface Quantity {
    value: number,
    unit: string
}

export interface IngredientOfRecipe {
    rowIngredient: Ingredient,
    quantity: Quantity
}

export interface IngredientForRecipe {
    recipeId: number | string,
    ingredient: IngredientOfRecipe
}

export interface Recipe {
    id: number,
    name: string,
    ingredients: IngredientOfRecipe[]
}

export interface RecipesState {
    nextId: number;
    recipes: Recipe[];
}

export interface AuthUser {
    username: string | null,
    email: string | null,
    isLoggedIn: boolean
}

export interface MealsForDay {
    day: number;
    date: Date;
    meals: Recipe[];
}