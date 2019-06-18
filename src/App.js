import React from 'react'
import Navbar from './components/Navbar';
import BookList from './components/BookList';

const App = () => {
    return(
        <div className="app">
            <Navbar />
            <BookList />
        </div>
    )
}

export default App