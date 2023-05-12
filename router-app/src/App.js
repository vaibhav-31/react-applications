import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import Home from "./Components/Pages/Home";
import Profile from "./Components/Pages/Profile";
import About from "./Components/Pages/About";
import PageNotFound from "./Components/Pages/PageNotFound";
import Header from "./Components/Pages/Header"

function App() {
  return (
    <main>
      <BrowserRouter basename="MyApp">
        <header>
          <h1>This is my App</h1>
        </header>
        <Header />
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="/profile" element={<Profile />} />
          <Route path ="/about" element={<About />} />
          <Route path ="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

    </main>
  );
}

export default App;
