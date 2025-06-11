import { MealType } from "../types";

interface MealTypeMultiSelectProps {
    value: MealType[];
    onChange?: (value: MealType[]) => void;
}

export function MealTypeMultiSelect({ value, onChange }: MealTypeMultiSelectProps) {
    function toggleMealType(meal: MealType) {
        if (value.includes(meal)) {
            onChange?.(value.filter((m) => m !== meal));
        } else {
            onChange?.([...value, meal]);
        }
    }

    return (
        <fieldset>
            <legend>Meal types:</legend>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                {Object.entries(MealType).map(([key, label]) => (
                    <label key={key} style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                        <input
                            type="checkbox"
                            checked={value.includes(label as MealType)}
                            onChange={() => toggleMealType(label as MealType)}
                        />
                        {label}
                    </label>
                ))}
            </div>
        </fieldset>
    );
}