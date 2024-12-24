// TODO: implement this view
export default function MealPlanPage() {
    const today = new Date().toISOString().split("T")[0];

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
                    />
                </fieldset>

                <fieldset>
                    <label>Ending date</label>
                    <input
                        type="date"
                        name="endingDate"
                        aria-label="DateTime"
                        defaultValue={today}
                    />
                </fieldset>
            </fieldset>

            <fieldset className="grid mb-0">
                <fieldset>
                    <label>Number of meals</label>
                    <input type="number" defaultValue="2" min="0" name="numberOfMeals"/>
                </fieldset>
            </fieldset>

            <button>Generate meal plan</button>

            <br/>
            <br/>

            <fieldset>
                <div className="overflow-auto">
                    <table className="striped">
                        <thead>
                        <tr>
                            <th scope="col">Day</th>
                            <th scope="col">Meal</th>
                            <th scope="col">Recipe</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">Mercury</th>
                            <td>1</td>
                            <td>88</td>
                        </tr>
                        <tr>
                            <th scope="row">Venus</th>
                            <td>2</td>
                            <td>225</td>
                        </tr>
                        <tr>
                            <th scope="row">Earth</th>
                            <td>1</td>
                            <td>1.00</td>
                        </tr>
                        <tr>
                            <th scope="row">Mars</th>
                            <td>2</td>
                            <td>1.52</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </fieldset>
        </div>
    );
}