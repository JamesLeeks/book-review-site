import { useEffect, useState } from "react";
import { ScoresChart } from "../components/ScoresChart";

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

export function SearchTest() {
    return (
        <>
            <ScoresChart
                width={useWindowDimensions().width / 5}
                data={[5, 6, 10, 9, 1]}
                labels={["Plot", "Characters", "Pacing", "Worldbuilding", ""]}
            />
        </>
    );
}
