export interface ScoresChartSettings {
    width: number;
    data: number;
    label: string;
}

export function ScoresChart({ width, data, label }: ScoresChartSettings) {
    const sectionWidth = width / 3;
    const sectionHeight = width / 28;
    const bonusWidth = sectionWidth / 10;
    const radius = width / 50;

    return (
        <>
            <div className="score-container">
                <div className="score-label">{label}</div>
                <svg width={bonusWidth + sectionWidth} height={sectionHeight}>
                    <rect
                        x={0}
                        y={0}
                        width={bonusWidth + sectionWidth}
                        height={sectionHeight}
                        fill="#6f6f6f"
                        rx={radius}
                        ry={radius}
                    />
                    <rect
                        x={0}
                        y={0}
                        width={bonusWidth + sectionWidth * (data / 10)}
                        height={sectionHeight}
                        fill="#56e3b4"
                        rx={radius}
                        ry={radius}
                    />
                </svg>
                <div className="score-number">{data}</div>
            </div>
        </>
    );
}
