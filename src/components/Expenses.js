import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses (props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        console.log('expenses.js');
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
           
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        { filteredExpenses.length === 0 ? <p>No Expenses Found</p> : filteredExpenses.map((expense) => (
            <ExpenseItem
                id = {expense.id}
                title = {expense.title}
                amount={expense.amount}
                date = {expense.date}
            />
        ))}
        
            
        </Card>
        </div>
    )
};

export default Expenses;