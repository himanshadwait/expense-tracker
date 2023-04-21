import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = (props) => {
  // If there are no items entered by the user then show certain Text.
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses!</h2>;
  }
  // else return the following

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          />
        //   Send all expenseData to ExpenseItem but why do we use map here and 
        //   why the provided map function is wrapped inside parenthesis?
      ))}
    </ul>
  );
};

export default ExpensesList;
