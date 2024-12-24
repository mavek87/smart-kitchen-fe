import {useGetAllRecipesQuery} from "../../../hooks/useQueries.ts";
import {Recipe} from "../../../types";
import {useRef, useState} from "react";

interface MealsForDay {
    day: number;
    meals: Recipe[];
}

export default function MealPlanPage() {
    const today = new Date().toISOString().split("T")[0];

    const {data: recipes} = useGetAllRecipesQuery();
    const startingDateRef = useRef<HTMLInputElement>(null);
    const endingDateRef = useRef<HTMLInputElement>(null);
    const numberOfMealsPerDayRef = useRef<HTMLInputElement>(null);
    const [mealsPerDays, setMealsPerDays] = useState<MealsForDay[] | undefined>(undefined);

    function getRandomRecipeIndex(max: number): number {
        return Math.floor(Math.random() * (max + 1));
    }

    function getRandomRecipe(): Recipe | null {
        if (recipes) {
            return recipes[getRandomRecipeIndex(recipes.length - 1)];
        } else {
            return null;
        }
    }

    const getRandomMealsForDays = (days: number, meals: number): MealsForDay[] => {
        console.log("getRandomMealsForDays");

        const mealsForDays = [];
        for (let day = 0; day < days + 1; day++) {
            const mealsForDay: MealsForDay = {
                day: day + 1,
                meals: new Array<Recipe>()
            };

            for (let mealNumber = 0; mealNumber < meals; mealNumber++) {
                const randomRecipe = getRandomRecipe();
                if (randomRecipe) {
                    mealsForDay.meals.push(randomRecipe);
                }
            }

            mealsForDays.push(mealsForDay);
        }
        return mealsForDays;
    }

    function calculateRandomMealsForDays() {
        console.log("calculateRandomMealsForDays");

        let numberOfMeals;
        const numberOfMealsRefValue = numberOfMealsPerDayRef?.current?.value;
        if (numberOfMealsRefValue) {
            numberOfMeals = +numberOfMealsRefValue;
        } else {
            numberOfMeals = 0;
        }

        console.log(numberOfMeals);

        let startingDate;
        const startingDateRefValue = startingDateRef?.current?.value;
        if (startingDateRefValue) {
            startingDate = startingDateRefValue;
        } else {
            startingDate = today;
        }

        console.log(startingDate);

        let endingDate;
        const endingDateRefValue = endingDateRef?.current?.value;
        if (endingDateRefValue) {
            endingDate = endingDateRefValue;
        } else {
            endingDate = today;
        }

        console.log(endingDate);

        const days = Math.round((new Date(endingDate).getTime() - new Date(startingDate).getTime()) / (1000 * 3600 * 24));
        console.log(days);

        setMealsPerDays(getRandomMealsForDays(days, numberOfMeals));
    }

    const exportTableToCSV = () => {
        const table = document.getElementById('meal-plan-table') as HTMLTableElement | null;

        if (!table) {
            console.error('Table non found');
            return;
        }

        let csvContent = '';

        // Itera le righe della tabella (header e body)
        for (const row of Array.from(table.rows)) {
            const rowData: string[] = [];
            for (const cell of Array.from(row.cells)) {
                rowData.push(cell.textContent?.trim() || ''); // Ottiene il contenuto della cella
            }
            csvContent += rowData.join(',') + '\n'; // Unisce i dati con la virgola e aggiunge una nuova riga
        }

        // Crea un file Blob con i dati CSV
        const blob = new Blob([csvContent], {type: 'text/csv'});
        const url = URL.createObjectURL(blob);

        // Crea un link per scaricare il file
        const a = document.createElement('a');
        a.href = url;
        a.download = 'meal-plan.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <div>
            <h2>Meal plan</h2>
            <br/>

            <fieldset className="grid mb-0">
                <fieldset>
                    <label>Starting date</label>
                    <input
                        type="date"
                        name="startingDate"
                        aria-label="DateTime"
                        defaultValue={today}
                        ref={startingDateRef}
                    />
                </fieldset>

                <fieldset>
                    <label>Ending date</label>
                    <input
                        type="date"
                        name="endingDate"
                        aria-label="DateTime"
                        defaultValue={today}
                        ref={endingDateRef}
                    />
                </fieldset>
            </fieldset>

            <fieldset className="grid mb-0">
                <fieldset>
                    <label>Number of meals</label>
                    <input type="number" defaultValue="2" min="0" name="numberOfMeals" ref={numberOfMealsPerDayRef}/>
                </fieldset>
            </fieldset>

            <fieldset>
                <button onClick={() => calculateRandomMealsForDays()}>Generate meal plan</button>
            </fieldset>

            <br/>

            <fieldset>
                <button onClick={exportTableToCSV}>Export plan to CSV</button>
                <div className="overflow-auto">
                    <table className="striped" id="meal-plan-table">
                        <thead>
                        <tr>
                            <th scope="col">Day</th>
                            <th scope="col">Meal</th>
                            <th scope="col">Recipe</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            mealsPerDays?.map((mealsForDay) => (
                                <>
                                    {
                                        mealsForDay.meals.map((meal, index) => (
                                            <tr key={index}>
                                                <td>{mealsForDay.day}</td>

                                                <td>
                                                    {index + 1}
                                                </td>

                                                <td>
                                                    {meal.name}
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </fieldset>
        </div>
    );
}