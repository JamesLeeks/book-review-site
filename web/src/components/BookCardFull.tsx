import type { book } from "../exampleBooks";
import placeHolderCover from "../assets/placeholder-cover.png";
import { ScoresChart } from "./ScoresChart";
import { useEffect, useState } from "react";

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

export function BookCardFull(props: book) {
    return (
        <>
            <div className="book-card-full">
                <img
                    className="card-cover"
                    src={placeHolderCover}
                    alt="Book cover"
                />
                <div className="book-info">
                    <div>{props.title}</div>
                    <div>{props.author}</div>
                    <div>
                        {props.rating <= 10 ? props.rating.toFixed(1) : "10.0"}
                    </div>
                    <div>
                        {props.representationRating <= 10
                            ? props.representationRating.toFixed(1)
                            : "10.0"}
                    </div>
                    <div className="scores-charts-container">
                        <ScoresChart
                            width={useWindowDimensions().width / 5}
                            data={5}
                            label={"Plot"}
                        />
                        <ScoresChart
                            width={useWindowDimensions().width / 5}
                            data={6}
                            label={"Characters"}
                        />
                        <ScoresChart
                            width={useWindowDimensions().width / 5}
                            data={10}
                            label={"Pacing"}
                        />
                        <ScoresChart
                            width={useWindowDimensions().width / 5}
                            data={9}
                            label={"Worldbuilding"}
                        />
                        <ScoresChart
                            width={useWindowDimensions().width / 5}
                            data={1}
                            label={"Average"}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
