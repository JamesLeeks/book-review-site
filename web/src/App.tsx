import "./stylesheets/App.css";
import { Book } from "./pages/Book";
import { Search } from "./pages/Search";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Search />}></Route>
                <Route path="/book" element={<Book />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
