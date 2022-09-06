import * as i0 from "@angular/core";
export declare class CalendarWeekComponent {
    _weekArray: string[];
    _displayWeekArray: string[];
    _weekStart: number;
    color: string;
    constructor();
    set weekArray(value: string[]);
    set weekStart(value: number);
    adjustSort(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalendarWeekComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CalendarWeekComponent, "ion-calendar-week", never, { "color": "color"; "weekArray": "weekArray"; "weekStart": "weekStart"; }, {}, never, never, false>;
}
