import React,{useState} from 'react';
import NewExpense from "./components/newExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const dummyData = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];
const App = () => {
    const [expenses, addExpense] = useState(dummyData)

    const addExpenseHandler = expense => {
        console.log("in App.js");
        console.log(expense)
        addExpense(prevExpense =>{
            return [expense,...prevExpense];});
    }

  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
