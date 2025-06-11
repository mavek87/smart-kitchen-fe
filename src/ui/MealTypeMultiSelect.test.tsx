import {describe, expect, it, vi} from "vitest";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {MealTypeMultiSelect} from "./MealTypeMultiSelect";
import {MealType} from "../types";

const allMealTypes = Object.values(MealType);

describe("MealTypeMultiSelect", () => {

    it("renders all meal options as checkboxes", () => {
        render(<MealTypeMultiSelect value={[]}/>);

        allMealTypes.forEach(mealType => expect(screen.getByLabelText(mealType)).toBeInTheDocument())
    });

    it.each([
        {
            selected: [MealType.breakfast, MealType.dinner],
        },
        {
            selected: [],
        },
        {
            selected: [MealType.snack],
        },
    ])(
        "renders correctly (checkbox checked) when selected = $selected",
        ({selected}) => {
            render(<MealTypeMultiSelect value={selected}/>);

            const expectedChecked = selected;
            const expectedUnchecked = allMealTypes.filter(mealType => !selected.includes(mealType));

            expectedChecked.forEach(label => expect(screen.getByLabelText(label)).toBeChecked());
            expectedUnchecked.forEach(label => expect(screen.getByLabelText(label)).not.toBeChecked());
        }
    );

    it.each([
        {
            initial: [MealType.breakfast],
            toClick: MealType.lunch,
            expected: [MealType.breakfast, MealType.lunch],
        },
        {
            initial: [MealType.lunch],
            toClick: MealType.lunch,
            expected: [],
        },
        {
            initial: [],
            toClick: MealType.snack,
            expected: [MealType.snack],
        },
        {
            initial: [MealType.breakfast, MealType.dinner],
            toClick: MealType.dinner,
            expected: [MealType.breakfast],
        },
    ])(
        "toggles checkbox: value=$initial click=$toClick → expects=$expected",
        async ({initial, toClick, expected}) => {
            const user = userEvent.setup();
            const onChange = vi.fn();

            render(<MealTypeMultiSelect value={initial} onChange={onChange}/>);

            const checkbox = screen.getByLabelText(toClick);
            await user.click(checkbox);

            expect(onChange).toHaveBeenCalledWith(expected);
        }
    );

    it.each(allMealTypes)(
        "does nothing if onChange is not provided (%s)",
        async (mealType) => {
            const user = userEvent.setup();

            render(<MealTypeMultiSelect value={[mealType]} />);

            const checkbox = screen.getByLabelText(mealType);
            expect(checkbox).toBeChecked();

            await user.click(checkbox);

            expect(checkbox).toBeChecked();
        }
    );
});