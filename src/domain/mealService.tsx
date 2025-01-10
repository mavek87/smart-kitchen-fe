import {MealsForDay, Recipe} from "../types";

export function getRandomRecipeIndex(max: number): number {
    return Math.floor(Math.random() * (max + 1));
}

export function getRandomRecipe(recipes: Recipe[]): Recipe | null {
    if (recipes) {
        return recipes[getRandomRecipeIndex(recipes.length - 1)];
    } else {
        return null;
    }
}

export function calculateRandomMealsForDays(recipes: Recipe[], startingDate: Date, days: number, meals: number): MealsForDay[] {
    const mealsForDays = [];
    for (let d = 0; d < days + 1; d++) {
        const day = d + 1;
        const date = new Date(startingDate);
        date.setDate(date.getDate() + d);
        const mealsForDay: MealsForDay = {
            day, date, meals: new Array<Recipe>()
        };

        for (let mealNumber = 0; mealNumber < meals; mealNumber++) {
            const randomRecipe = getRandomRecipe(recipes);
            if (randomRecipe) {
                mealsForDay.meals.push(randomRecipe);
            }
        }

        mealsForDays.push(mealsForDay);
    }
    return mealsForDays;
}