import { DividingLines } from "./DividingLines";
import { PieSlice } from "./PieSlice";

export type colorScheme = {
    backgroundColour: string;
    strokeColour: string;
}

export interface PieChartSettings {
    size: number;
    data: number[];
    colorScheme: colorScheme;
}

export function PieChart({size, data, colorScheme}: PieChartSettings) {
    // const data = [8, 7, 6, 6, 5];

    return <>
    <svg className="pie-chart" height={size} width={size}>
        {getPieSlices(data, size, colorScheme)}
        </svg>
    </>
}


function getPieSlices(data: number[], size: number, colourScheme: colorScheme) {
	const colours = ["#ffb47f", "#FF7FDD", "#74e1a3", "#7f81ff", "#ff6969"];
	const total = data.reduce((a, b) => a + b);
	const radiansPerUnit = (2 * Math.PI) / total;

	let startAngleRadians = 0;
	let sweepAngleRadians = null;

    const pieSlices = [];
    const lines = []

	for (let i = 0, l = data.length; i < l; i++) {
		sweepAngleRadians = data[i] * radiansPerUnit;
        const radius = size / 4 * 1.5;
		const wedgeRadius = radius * (data[i] / 10);

        const strokeWidth = size / 85;

		
        pieSlices.push(<PieSlice key={`bg-${i}`} centreX={size/2} centreY={size/2} startAngleRadians={startAngleRadians} sweepAngleRadians={sweepAngleRadians} radius={radius} fillColour={colourScheme.backgroundColour} strokeColour={colourScheme.strokeColour} strokeOpacity={1} strokeWidth={strokeWidth} />);
        pieSlices.push(<PieSlice key={`${i}`} centreX={size/2} centreY={size/2} startAngleRadians={startAngleRadians} sweepAngleRadians={sweepAngleRadians} radius={wedgeRadius} fillColour={colours[i]} strokeColour={colourScheme.backgroundColour} strokeOpacity={1} strokeWidth={strokeWidth} />);
        lines.push(<DividingLines key={`line-${i}`} centreX={size/2} centreY={size/2} startAngleRadians={startAngleRadians} sweepAngleRadians={sweepAngleRadians} radius={radius} strokeWidth={strokeWidth} strokeColour={colourScheme.strokeColour}/>)

		startAngleRadians += sweepAngleRadians;
	}

    lines.push(<circle r={size / 4 * 1.5} cx={size / 2} cy={size / 2} fillOpacity={0} stroke={colourScheme.strokeColour} strokeWidth={size / 85} />)

    return [pieSlices, lines];
}