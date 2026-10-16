import { usePreferredDark } from "@reactuses/core";
import { useState } from "react";
import { Banner } from "../components/Banner";

export function CheckDigitTest() {
    const [theme, setTheme] = useState<"dark" | "light">(
        usePreferredDark() ? "dark" : "light",
    );

    function verifyISBN(isbn: string) {
        const digits: number[] = [];
        for (let i = 0; i < isbn.length; i++) {
            if (isbn[i] !== "-") {
                digits.push(Number(isbn[i]));
            }
        }

        return calculateCheckDigit(digits) === digits[12];
    }

    function calculateCheckDigit(digits: number[]) {
        let total = 0;
        for (let i = 0; i < 12; i++) {
            const multiplier = i % 2 > 0 ? 3 : 1;
            total += digits[i] * multiplier;
        }
        const remainder = total % 10;
        return 10 - remainder;
    }

    return (
        <>
            <div className={`page ${theme}`}>
                <Banner theme={theme} setTheme={setTheme} />
                {verifyISBN("978-1-3996-1855-7") ? "true" : "false"}
                {verifyISBN("978-0-261-10334-4") ? "true" : "false"}
                {verifyISBN("978-1-03-720850-8") ? "true" : "false"}
                {/* {verifyISBN("978-1-03-720850-8") ? "true" : "false"} */}
                {verifyISBN("9781399618151") ? "true" : "false"}
                {verifyISBN("9781399618557") ? "true" : "false"}
                {verifyISBN("5781388618517") ? "true" : "false"}
            </div>
        </>
    );
}
