import './ExpenseForm.css';
import React,{useState} from "react";
const ExpenseForm = () => {
    // const [enteredTitle,setEnteredTitle]= useState('')
    // const [enteredAmount,setEnteredAmount]= useState('')
    // const [enteredDate,setEnteredDate]= useState('')
   const [userInput,setUserInput]  = useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        // setEnteredTitle(event.target.value)
        setUserInput((prevState) =>{
            return {...prevState,enteredTitle: event.target.value
            }

        })
    };

    const amountChangeHandler = (event) => {

        // using one state but due to react schedualing state update you could be using past state
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })

        // using multipe use state
        // setEnteredAmount(event.target.value)
        setUserInput((prevState) => {
            return {
                ...prevState, enteredAmount: event.target.value
            }
        });

    };


    const dateChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
        // setEnteredDate(event.target.value)

        setUserInput((prevState) => {
            return {
                ...prevState, setEnteredDate: event.target.value
            }
        });
    };



    return <form>
        <div className="new-expense_controls" >
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="nummber" min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date"  min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}
export default ExpenseForm