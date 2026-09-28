import "./stylesheets/App.css";
import { Book } from "./pages/Book";
import { Search } from "./pages/Search";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/search" element={<Search />}></Route>
                <Route path="/book" element={<Book />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
