import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

// Setup test case
// Call editExpense
// Make an assertion

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New note value' })
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    update: {
      note: 'New note value'
    }
  })
})

test('should setup add expense action object', () => {
  const e = { 
    description: 'Some description',
    note: 'Some note',
    amount: 99900,
    createdAt: 123
  }
  const action = addExpense(e)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...e,
      id: expect.any(String)
    }
  })
})

test('should setup add expense action object without data', () => {
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  })
})