// App.js
import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(10000); // Set your initial budget here

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  const getTotalExpenses = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  const remainingBalance = budget - getTotalExpenses();

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <p>Total Budget: ${budget}</p>
      <p>Total Expenses: ${getTotalExpenses()}</p>
      <p>Remaining Balance: ${remainingBalance}</p>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
