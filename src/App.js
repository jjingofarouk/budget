import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';

import { AppProvider } from './context/AppContext';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    {/* Add Budget component here */}
                    <div className='col-sm'>
                        <Budget />
                    </div>

                    {/* Add Remaining component here */}
                    <div className='col-sm'>
                        <Remaining />
                    </div>

                    {/* Add ExpenseTotal component here */}
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>

                    {/* Add ExpenseList component here */}
                    <div className='col-12 mt-3'>
                        <ExpenseList />
                    </div>

                    {/* Add ExpenseItem component here */}
                    {/* Note: ExpenseItem might be used inside ExpenseList, but I'll include it separately for demonstration */}
                    <div className='col-12 mt-3'>
                        <ExpenseItem />
                    </div>

                    {/* Add AllocationForm component here */}
                    <div className='col-12 mt-3'>
                        <AllocationForm />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;