import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  }); // receiving the expenseData from App and filtering it based on the selected year.
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear} // Why this prop? // Select the selected year and send it to expenseFilter?
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {/* Sending filteredExpenses based on selected year to ExpensesChart */}
        <ExpensesList items={filteredExpenses} />
        {/* Sending filteredExpenses based on selectedYear to ExpensesList */}
      </Card>
    </div>
  );
};

export default Expenses;
