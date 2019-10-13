import { createStore, combineReducers } from 'redux';

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expOne = store.dispatch(addExpense({ description: 'New expense', note: 'This is a new expense', createdAt: 20000, amount: 10 }));
const expTwo = store.dispatch(addExpense({ description: 'Newer expense', note: 'This is a newer expense', createdAt: 1000, amount: 300 }));

// store.dispatch(removeExpense({ id: expOne.expense.id }))
// store.dispatch(editExpense(expTwo.expense.id, { amount: 200 } ));

store.dispatch(setTextFilter('new'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount()); // amount
// store.dispatch(sortByDate());   // date

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(500));
// store.dispatch(setEndDate());

const demoState = {
  expenses: [{
    id: 'abcdef',
    description: 'rent',
    notes: 'monthly rental payment',
    amount: 10000,
    createdAt: 0
  }],
  filters: {
    text: 'a string, e.g. rent',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};