import React from 'react'
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ToggleTheme from './components/ToggleTheme';

const App = () => {
    return(
        <div className="app">
            <ThemeContextProvider>
                <Navbar />
                <BookList />
                <ToggleTheme />
            </ThemeContextProvider>
        </div>
    )
}

export default App