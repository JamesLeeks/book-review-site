import { PieChart } from "../components/PieChart";
import placeHolderCover from "../assets/placeholder-cover.png";
import { useState, useEffect } from "react";

// code for getting window height from here: https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions(),
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}

export function Book() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    const colourScheme = {
        backgroundColour: theme === "dark" ? "#353535" : "#d4d4d4",
        strokeColour: theme === "dark" ? "#3D3D3D" : "#ECECEC",
    };

    return (
        <>
            <div className="banner">
                <button
                    onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
                >
                    change theme
                </button>
            </div>

            <div className={`book-info-container ${theme}`}>
                <div className="cover-info-container">
                    <div className="cover-info">
                        <img
                            className="cover"
                            src={placeHolderCover}
                            alt="Book cover"
                        />
                        <div className="divider"></div>
                        <div className="title-container">
                            <div className="title">Placeholder Title</div>
                            <div className="author-container">
                                <div className="label">by</div>
                                <div className="author">Placeholder Author</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="stats-container">
                    <div className="stats">
                        <div className="rating-container">
                            <div className="rating">9.8</div>
                            <div className="label">Overall rating</div>
                        </div>
                        <div className="divider"></div>
                        <div className="pie-chart-container">
                            {" "}
                            <PieChart
                                size={useWindowDimensions().width / 5}
                                data={[8, 7, 6, 6, 5]}
                                colorScheme={{
                                    backgroundColour:
                                        colourScheme.backgroundColour,
                                    strokeColour: colourScheme.strokeColour,
                                }}
                            />
                        </div>
                        <div className="divider"></div>
                        <div className="representation-container">
                            <div className="representation">7.8</div>
                            <div className="label">Positive representation</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
