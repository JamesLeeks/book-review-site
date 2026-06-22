import { useState } from "react";
// import { BookCard } from "../components/BookCard";
import { createExampleBooks } from "../exampleBooks";
import { BookCardFull } from "../components/BookCardFull";

export function Search() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    const books = createExampleBooks(100);
    // const bookCards = books.map((book) => (
    //     <BookCard key={books.findIndex((b) => b === book)} {...book} />
    // ));
    const bookCardsFull = books.map((book) => (
        <BookCardFull key={books.findIndex((b) => b === book)} {...book} />
    ));

    return (
        <>
            {/* TODO: make banner into a component */}
            <div className={`page ${theme}`}>
                <div className="banner">
                    <div className="left-container"></div>
                    <div className="right-container">
                        <button
                            className={`theme-button ${theme}`}
                            onClick={() =>
                                setTheme(theme === "dark" ? "light" : "dark")
                            }
                        >
                            <div className="theme-icon"></div>
                        </button>
                    </div>
                </div>

                <div className={"search-container"}>
                    <div className="search-settings">
                        <div className="settings-section">
                            <div className="settings-heading">
                                Seclect a genre:
                            </div>
                            <div className="option">
                                <input
                                    className="check-box"
                                    type="checkbox"
                                    id="crime"
                                />
                                <label htmlFor="crime">Crime</label>
                            </div>
                            <div className="option">
                                <input
                                    className="check-box"
                                    type="checkbox"
                                    id="horror"
                                />
                                <label htmlFor="horror">Horror</label>
                            </div>
                            <div className="option">
                                <input
                                    className="check-box"
                                    type="checkbox"
                                    id="fantasy"
                                />
                                <label htmlFor="fantasy">Fantasy</label>
                            </div>
                            <div className="option">
                                <input
                                    className="check-box"
                                    type="checkbox"
                                    id="science fiction"
                                />
                                <label htmlFor="science fiction">
                                    Science Fiction
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="books-container">{bookCardsFull}</div>
                </div>
            </div>
        </>
    );
}
