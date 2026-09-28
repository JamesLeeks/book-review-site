import { useState } from "react";
import { Banner } from "../components/Banner";
import { usePreferredDark } from "@reactuses/core";

export function Home() {
    const [theme, setTheme] = useState<"dark" | "light">(
        usePreferredDark() ? "dark" : "light",
    );
    return (
        <div className={`page ${theme}`}>
            <Banner theme={theme} setTheme={setTheme} />
            <h1>{theme}</h1>
        </div>
    );
}
