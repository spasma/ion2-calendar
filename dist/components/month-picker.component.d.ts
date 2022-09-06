import { EventEmitter } from '@angular/core';
import { CalendarMonth } from '../calendar.model';
import * as i0 from "@angular/core";
export declare class MonthPickerComponent {
    month: CalendarMonth;
    color: string;
    select: EventEmitter<number>;
    _thisMonth: Date;
    _monthFormat: string[];
    MONTH_FORMAT: string;
    set monthFormat(value: string[]);
    get monthFormat(): string[];
    constructor();
    _onSelect(month: number): void;
    getDate(month: number): Date;
    static ɵfac: i0.ɵɵFactoryDeclaration<MonthPickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MonthPickerComponent, "ion-calendar-month-picker", never, { "month": "month"; "color": "color"; "monthFormat": "monthFormat"; }, { "select": "select"; }, never, never, false>;
}
