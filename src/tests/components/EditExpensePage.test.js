import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let history, editExpense, removeExpense, wrapper

beforeEach(() => {
  history = { push: jest.fn() }
  editExpense = jest.fn()
  removeExpense = jest.fn()
  wrapper = shallow(<EditExpensePage expense={ expenses[0] } editExpense = { editExpense } removeExpense = { removeExpense } history = { history } />)
})

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')( expenses[1] )
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[1])
})

test('should handle removeExpense', () => {
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[0].id })
})