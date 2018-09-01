import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from "../../actions/filters";
import moment from "moment";

test("Should generate set start date action object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        date: moment(0)
    });
});

test("Should generate set end date action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        date: moment(0)
    });
});

test("Should generate sort by amount action object", () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    });
});

test("Should generate sort by date action object", () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    });
});

test("Should generate set text filter action object with text value", () => {
    const action = setTextFilter("Set text filter action object");
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "Set text filter action object"
    });
});

test("Should generate set text filter action object with default values", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    });
});