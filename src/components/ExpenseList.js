import React from 'react'
import ExpenseListItem from './ExpenseListItem.js'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
  <div>
    { 
      props.expenses.length  === 0 ? (
        <p>No expenses</p>
      ) : (
        props.expenses.map((e) => {
          return <ExpenseListItem key={e.id} {...e} />
        })
      )
    }
  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList)