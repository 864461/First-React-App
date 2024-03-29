import './ExpenseForm.css';
import React, {useState} from "react";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    // const [userInput,setUserInput]  = useState({
    //      enteredTitle:'',
    //      enteredAmount:'',
    //      enteredDate: ''
    //  });

    const titleChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        // setUserInput((prevState) =>{
        //     return {...prevState,enteredTitle: event.target.value
        //     }
        //
        // })
        setEnteredTitle(event.target.value)
    };

    const amountChangeHandler = (event) => {

        // using one state but due to react schedualing state update you could be using past state
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })

        // using multipe use state

        // setUserInput((prevState) => {
        //     return {
        //         ...prevState, enteredAmount: event.target.value
        //     }
        // });

        setEnteredAmount(event.target.value)

    };


    const dateChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
        // setEnteredDate(event.target.value)

        // setUserInput((prevState) => {
        //     return {
        //         ...prevState, setEnteredDate: event.target.value
        //     }
        // });

        setEnteredDate(event.target.value)
    };

    const inputChangeHandler = (identifier, value) => {
        if (identifier == 'title') {
            setEnteredTitle(value)
        } else if (identifier == 'date') {
            setEnteredDate(value)
        } else {
            setEnteredAmount(value)
        }
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        // console.log(expenseData)
        setEnteredTitle("")
        setEnteredDate("")
        setEnteredAmount("")
        props.onCancel()
    }

    const cancelHandler = () =>{
        props.onCancel()
    }


    return <form onSubmit={submitHandler}>
        <div className="new-expense_controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle}
                       onChange={(event) => inputChangeHandler('title', event.target.value)}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount}
                       onChange={(event) => inputChangeHandler('amount', event.target.value)}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate}
                       onChange={(event) => inputChangeHandler('date', event.target.value)}/>
            </div>
        </div>
        <p></p>
        <div className="new-expense__actions">
            <button onClick={cancelHandler} >Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
}
export default ExpenseForm