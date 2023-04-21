import React, {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

// Dummy Expenses

const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {
    const [expenses, setExpenses] = useState(dummyExpenses);

    const addExpenseHandler = (expense) => {
        // Adding expenseData to the dataArray
        setExpenses((prevExpense) => {
    return [expense, ...prevExpense]
})
    }
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            {/* Receiving expenseData from NewExpense */}
            <Expenses items={expenses} />
            {/* Sending expenseData from App to Expenses */}
        </div>
    )
};

export default App;
