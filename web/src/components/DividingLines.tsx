export type DividingLineSettings = {
    centreX: number;
    centreY: number;
    radius: number;
    startAngleRadians: number;
    sweepAngleRadians: number;
    strokeColour: string;
    strokeWidth: number;
};

export function DividingLines(settings: DividingLineSettings) {
    const firstCircumferenceX = settings.centreX + settings.radius * Math.cos(settings.startAngleRadians);
    const firstCircumferenceY = settings.centreY + settings.radius * Math.sin(settings.startAngleRadians);
    const secondCircumferenceX = settings.centreX + settings.radius * Math.cos(settings.startAngleRadians + settings.sweepAngleRadians);
    const secondCircumferenceY = settings.centreY + settings.radius * Math.sin(settings.startAngleRadians + settings.sweepAngleRadians);
    
    const lines = [];

    lines.push(<line x1={firstCircumferenceX} y1={firstCircumferenceY} x2={settings.centreX} y2={settings.centreY} style={{stroke: settings.strokeColour, strokeWidth: settings.strokeWidth}}></line>);
    lines.push(<line x1={secondCircumferenceX} y1={secondCircumferenceY} x2={settings.centreX} y2={settings.centreY} style={{stroke: settings.strokeColour, strokeWidth: settings.strokeWidth}}></line>);

    return lines;
    }