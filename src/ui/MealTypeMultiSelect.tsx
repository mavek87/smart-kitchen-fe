import {MealType} from "../types";

interface MealTypeMultiSelectProps {
    value: MealType[];
    onChange?: (value: MealType[]) => void;
}

const mealOptions: Record<MealType, string> = {
    breakfast: "Breakfast",
    lunch: "Lunch",
    dinner: "Dinner",
    snack: "Snack"
};

export function MealTypeMultiSelect({value, onChange}: MealTypeMultiSelectProps) {

    function toggleMealType(meal: MealType) {
        if (value.includes(meal)) {
            onChange?.(value.filter(m => m !== meal));
        } else {
            onChange?.([...value, meal]);
        }
    }

    return (
        <fieldset>
            <legend>Meal types:</legend>
            <div
                style={{
                    display: 'flex',
                    gap: '1rem',
                    flexWrap: 'wrap'
                }}
            >
                {Object.entries(mealOptions).map(([key, label]) => (
                    <label key={key} style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}>
                        <input
                            type="checkbox"
                            checked={value.includes(key as MealType)}
                            onChange={() => toggleMealType(key as MealType)}
                        />
                        {label}
                    </label>
                ))}
            </div>
        </fieldset>
    );
}