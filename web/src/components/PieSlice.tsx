
export type PieSliceSettings = {
    centreX: number;
    centreY: number;
    radius: number;
    startAngleRadians: number;
    sweepAngleRadians: number;
    fillColour: string;
    strokeColour: string;
    strokeWidth: number;
    strokeOpacity: number;
};

// svg pie chart code based on https://www.codedrome.com/drawing-arcs-pie-slices-with-svg/
export function PieSlice(settings: PieSliceSettings) {
    let d = "";

    const firstCircumferenceX = settings.centreX + settings.radius * Math.cos(settings.startAngleRadians);
    const firstCircumferenceY = settings.centreY + settings.radius * Math.sin(settings.startAngleRadians);
    const secondCircumferenceX = settings.centreX + settings.radius * Math.cos(settings.startAngleRadians + settings.sweepAngleRadians);
    const secondCircumferenceY = settings.centreY + settings.radius * Math.sin(settings.startAngleRadians + settings.sweepAngleRadians);

    // move to centre
    d += "M" + settings.centreX + "," + settings.centreY + " ";
    // line to first edge
    d += "L" + firstCircumferenceX + "," + firstCircumferenceY + " ";
    // arc
    // Radius X, Radius Y, X Axis Rotation, Large Arc Flag, Sweep Flag, End X, End Y
    d += "A" + settings.radius + "," + settings.radius + " 0 0,1 " + secondCircumferenceX + "," + secondCircumferenceY + " ";
    // close path
    d += "Z";

    return <path d={d} fill={settings.fillColour} strokeOpacity={settings.strokeOpacity} stroke={settings.strokeColour} strokeWidth={settings.strokeWidth}></path>
}