import { createStore, combineReducers } from "redux";






store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});



// const expenseOne = store.dispatch(addExpense({ description: "Rent", amount: 100, createdAt: -21000 }));
// const expenseTwo = store.dispatch(addExpense({ description: "Coffee", amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense({ id: expenseTwo.expense.id, updates: { amount: 10000 } }));

// store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(999));