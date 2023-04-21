import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: (Math.floor(Math.random() * 10) + 1).toString(),
    };
    props.onAddExpense(expenseData); // Passing expenseData from NewExpense to App
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          // Receiving expenseData from ExpenseForm
          onCancel={stopEditingHandler}
          // Passing a state from NewExpense to ExpenseForm to stopEditing when form submission is cancelled.
        />
      )}
    </div>
  );
};

export default NewExpense;
