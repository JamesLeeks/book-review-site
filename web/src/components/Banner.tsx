export function Banner(params: {
    theme: string;
    setTheme: (newValue: "dark" | "light") => void;
}) {
    const { theme, setTheme } = params;
    return (
        <div className="banner">
            <div className="left-container">
                <a href="http://localhost:5173" className="search-button">
                    <div className="home-icon"></div>
                </a>
            </div>
            <div className="right-container">
                <a
                    href="http://localhost:5173/search"
                    className="search-button"
                >
                    <div className="search-icon"></div>
                </a>
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
    );
}
