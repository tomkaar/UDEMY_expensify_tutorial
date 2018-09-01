import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("Should setup default filter value", () => {
    const state = filtersReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    })
});

test("Should set sortBy to amount", () => {
    const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
    expect(state.sortBy).toBe("amount");
});

test("Should set sortBy to date", () => {
    const currentState = {
        text: "",
        startDate: undefined,
        endDate: undefined,
        sortBy: "amount"
    };
    const action = { type: "SORT_BY_DATE" };
    const state = filtersReducer(state, action);
    expect(state.sortBy).toBe("date");
});

test("Should set text filter", () => {
    const action = { type: "SET_TEXT_FILTER", text: "Filter" };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe("Filter");
});

test("Should set startDate filter", () => {
    const startDate = moment();
    const action = {
        type: "SET_START_DATE",
        date: startDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test("Should set endDate filter", () => {
    const endDate = moment();
    const action = {
        type: "SET_END_DATE",
        date: endDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});

