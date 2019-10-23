import React from 'react'
import expensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'

export default class ExpensesSummary extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      expenseCount: props.expenses ? props.expenses.length : 0,
      expensesTotal: props.expenses ? expensesTotal(props.expenses) : 0
    }
  }

  render() {
    return (
      <p>
        Viewing&nbsp;
        { this.state.expenseCount }&nbsp;
        expense&nbsp;
        { this.state.expensesTotal > 1 ? "s" : "" }
        totalling&nbsp;
        { numeral(this.state.expensesTotal / 100).format('$0,0.00') }
      </p>
    )
  }
}