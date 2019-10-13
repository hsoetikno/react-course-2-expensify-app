import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter.js'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/style.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()
// console.log(store.getState())

// addExpense -> Water bill
store.dispatch(addExpense({
  description: 'Gas bill',
  note: 'Gas bill for Sept 2018',
  amount: 37500,
  createdAt: 123
}))

// addExpense -> Gas bill
store.dispatch(addExpense({
  description: 'Water bill',
  note: 'Water bill for Jul 2018',
  amount: 2000,
  createdAt: 456
}))

// addExpense -> Rent bill
store.dispatch(addExpense({
  description: 'Rent',
  amount: 350000
}))

// getVisibleExpenses -> print visible to screen
// console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render((
  jsx
), document.getElementById('app'))