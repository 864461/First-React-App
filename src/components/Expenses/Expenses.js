import Card from '../Ui/Card';
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const addYearHandler = (data) => {
        setFilteredYear(data)
        console.log("we are getting :" + data)

    }
    const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear
    });

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onAddYear={addYearHandler}/>
            <ExpensesList filteredExpenses={filteredExpenses}/>
        </Card>
    );
}

export default Expenses;


// rendeirng conditional content
{/*{filteredExpenses.length === 0 && <p>No expenses found</p>}*/}
{/*{filteredExpenses.length > 0 &&*/}
{/*    filteredExpenses.map((expense) => (*/}
{/*        <ExpenseItem*/}
{/*            key={expense.id}*/}
{/*            title={expense.title}*/}
{/*            amount={expense.amount}*/}
{/*            date={expense.date}/>))}*/}