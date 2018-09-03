function getExpensesTotal(expenses = [{}]) {
    return expenses
        .map(expense => expense.amount)
        .reduce((num, total) => total + num, 0);
};

export default getExpensesTotal;