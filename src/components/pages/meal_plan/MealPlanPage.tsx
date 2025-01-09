import {useGetAllRecipesQuery} from "../../../hooks/useQueries.ts";
import {MealsForDay, Recipe} from "../../../types";
import {useRef, useState} from "react";
import Accordion from "../../../ui/Accordion.tsx";
import IngredientVisualizer from "../../ingredient/IngredientVisualizer.tsx";

export default function MealPlanPage() {
    const today = new Date().toISOString().split("T")[0];

    const {data: recipes} = useGetAllRecipesQuery();
    const startingDateRef = useRef<HTMLInputElement>(null);
    const [startingDateInvalid, setStartingDateInvalid] = useState<boolean | undefined>(undefined);
    const [endingDateInvalid, setEndingDateInvalid] = useState<boolean | undefined>(undefined);
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

    const getRandomMealsForDays = (startingDate: Date, days: number, meals: number): MealsForDay[] => {
        const mealsForDays = [];
        for (let d = 0; d < days + 1; d++) {
            const day = d + 1;
            const date = new Date(startingDate);
            date.setDate(date.getDate() + d);
            const mealsForDay: MealsForDay = {
                day, date, meals: new Array<Recipe>()
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

    function getDateFromInputRef(inputRef: React.RefObject<HTMLInputElement>, today: string) {
        let dateValue;
        const dateRefValue = inputRef?.current?.value;
        if (dateRefValue) {
            dateValue = dateRefValue;
        } else {
            dateValue = today;
        }
        return new Date(dateValue);
    }

    function calculateRandomMealsForDays() {
        const startingDate = getDateFromInputRef(startingDateRef, today);
        const endingDate = getDateFromInputRef(endingDateRef, today);

        if (startingDate >= endingDate) {
            setStartingDateInvalid(true);
            setEndingDateInvalid(true);
            return;
        } else {
            let numberOfMeals;
            const numberOfMealsRefValue = numberOfMealsPerDayRef?.current?.value;
            if (numberOfMealsRefValue) {
                numberOfMeals = +numberOfMealsRefValue;
            } else {
                numberOfMeals = 0;
            }

            const days = Math.round((endingDate.getTime() - startingDate.getTime()) / (1000 * 3600 * 24));

            setMealsPerDays(getRandomMealsForDays(startingDate, days, numberOfMeals));

            setStartingDateInvalid(undefined);
            setEndingDateInvalid(undefined);
        }
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
                        aria-invalid={startingDateInvalid}
                        aria-describedby="valid-starting-date-helper"
                    />
                    {startingDateInvalid &&
                        <small id="valid-starting-date-helper">The starting date must be before the ending date</small>}
                </fieldset>

                <fieldset>
                    <label>Ending date</label>
                    <input
                        type="date"
                        name="endingDate"
                        aria-label="DateTime"
                        defaultValue={today}
                        ref={endingDateRef}
                        aria-invalid={endingDateInvalid}
                        aria-describedby="valid-ending-date-helper"
                    />
                    {endingDateInvalid &&
                        <small id="valid-ending-date-helper">The ending date must be after the starting date</small>}
                </fieldset>
            </fieldset>

            <fieldset className="grid mb-0">
                <fieldset>
                    <label>Number of meals</label>
                    <input type="number" defaultValue="2" min="0" name="numberOfMeals" ref={numberOfMealsPerDayRef}/>
                </fieldset>
            </fieldset>

            <fieldset className="grid">
                <button onClick={() => calculateRandomMealsForDays()}>Generate plan</button>
                {mealsPerDays && mealsPerDays.length > 0 &&
                    <button onClick={() => exportTableToCSV()}>Export plan to CSV</button>}
            </fieldset>

            <br/>

            <fieldset>
                <div className="overflow-auto">
                    <table className="striped" id="meal-plan-table">
                        <thead>
                        <tr>
                            <th scope="col">Day #</th>
                            <th scope="col">Date</th>
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

                                                <td>{mealsForDay.date.toDateString()}</td>

                                                <td>
                                                    {index + 1}
                                                </td>

                                                <td>
                                                    <Accordion title={meal.name} content={
                                                        <ul>
                                                            {meal.ingredients.map(ingredient =>
                                                                <li key={ingredient.rowIngredient.id}><IngredientVisualizer ingredient={ingredient}/></li>
                                                            )}
                                                        </ul>
                                                    }/>
                                                </td>
                                            </tr>
                                            // }/>
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