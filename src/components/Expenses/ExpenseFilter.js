import './ExpenseFilter.css'
import {useState} from "react";
const ExpenseFilter = (props) =>{
    const saveData = (event) =>{
        props.onAddYear(event.target.value)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={saveData}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>

    )
}

export default ExpenseFilter