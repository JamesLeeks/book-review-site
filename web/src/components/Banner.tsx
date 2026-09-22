export function Banner(params: {
    theme: string;
    setTheme: (newValue: "dark" | "light") => void;
}) {
    const { theme, setTheme } = params;
    return (
        <div className="banner">
            <div className="left-container"></div>
            <div className="right-container">
                <form action="">
                    <button className="search-button">
                        <div className="search-icon"></div>
                    </button>
                </form>
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
