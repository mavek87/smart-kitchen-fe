import {RecipesState} from "../types";

const startingRecipes: RecipesState = {
    nextId: 5,
    recipes: [
        {
            id: 1,
            name: "Carbonara",
            ingredients: [
                {
                    rowIngredient: {
                        id: 901,
                        name: "Uovo"
                    },
                    quantity: {
                        unit: "unit",
                        value: 1
                    }
                },
                {
                    rowIngredient: {
                        id: 902,
                        name: "Guanciale"
                    },
                    quantity: {
                        unit: "g",
                        value: 50
                    }
                },
                {
                    rowIngredient: {
                        id: 903,
                        name: "Spaghetti"
                    },
                    quantity: {
                        unit: "g",
                        value: 100
                    }
                },
                {
                    rowIngredient: {
                        id: 904,
                        name: "Pecorino"
                    },
                    quantity: {
                        unit: "g",
                        value: 5
                    }
                }
            ]
        },
        {
            id: 2,
            name: "Cheeseburger",
            ingredients: []
        },
        {
            id: 3,
            name: "Ramen",
            ingredients: []
        },
        {
            id: 4,
            name: "Matriciana",
            ingredients: []
        }
    ]
};

export {startingRecipes};