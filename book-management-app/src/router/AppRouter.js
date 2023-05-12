import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import EditBook from '../components/EditBook';
import useLocalStorage from '../hooks/useLocalStorage';




// Routing for Various Components


const AppRouter = () => {
    const [books, setBooks] = useLocalStorage('books', []);
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <Switch>
                        <Route
                            render={(props) => (
                                <BooksList {...props} books={books} setBooks={setBooks} />
                            )}
                            path="/"
                            exact={true}
                        />
                        <Route
                            render={(props) => (
                                <AddBook {...props} books={books} setBooks={setBooks} />
                            )}
                            path="/add"
                        />
                        <Route
                            render={(props) => (
                                <EditBook {...props} books={books} setBooks={setBooks} />
                            )}
                            path="/edit/:id"
                        />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;