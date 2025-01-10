import {useGetAllRecipesQuery} from "../../../hooks/useQueries.ts";
import {MealsForDay, Recipe} from "../../../types";
import {RefObject, useRef, useState} from "react";
import Accordion from "../../../ui/Accordion.tsx";
import IngredientVisualizer from "../../ingredient/IngredientVisualizer.tsx";
import {calculateRandomMealsForDays} from "../../../domain/mealService.tsx";
import {exportTableToCSV} from "../../../domain/csvService.tsx";

export default function MealPlanPage() {
    const today = new Date().toISOString().split("T")[0];

    const {data: recipes} = useGetAllRecipesQuery();
    const startingDateRef = useRef<HTMLInputElement>(null);
    const [startingDateInvalid, setStartingDateInvalid] = useState<boolean | undefined>(undefined);
    const [endingDateInvalid, setEndingDateInvalid] = useState<boolean | undefined>(undefined);
    const endingDateRef = useRef<HTMLInputElement>(null);
    const numberOfMealsPerDayRef = useRef<HTMLInputElement>(null);
    const [mealsPerDays, setMealsPerDays] = useState<MealsForDay[] | undefined>(undefined);

    if (!recipes) {
        throw new Error("No recipes found");
    }

    function getDateFromInputRef(inputRef: RefObject<HTMLInputElement>, today: string) {
        let dateValue;
        const dateRefValue = inputRef?.current?.value;
        if (dateRefValue) {
            dateValue = dateRefValue;
        } else {
            dateValue = today;
        }
        return new Date(dateValue);
    }

    function setRandomMealsForDaysInView(recipes: Recipe[], startingDate: Date, endingDate: Date) {
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

            setMealsPerDays(calculateRandomMealsForDays(recipes, startingDate, days, numberOfMeals));
            setStartingDateInvalid(undefined);
            setEndingDateInvalid(undefined);
        }
    }

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
                <button
                    onClick={() => setRandomMealsForDaysInView(recipes, getDateFromInputRef(startingDateRef, today), getDateFromInputRef(endingDateRef, today))}
                >
                    Generate plan
                </button>
                {
                    mealsPerDays && mealsPerDays.length > 0 &&
                    <button onClick={exportTableToCSV}>Export plan to CSV</button>
                }
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
                                                                <li key={ingredient.rowIngredient.id}>
                                                                    <IngredientVisualizer ingredient={ingredient}/></li>
                                                            )}
                                                        </ul>
                                                    }/>
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