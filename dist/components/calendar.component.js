"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarComponent = exports.ION_CAL_VALUE_ACCESSOR = void 0;
var core_1 = require("@angular/core");
var calendar_service_1 = require("../services/calendar.service");
var forms_1 = require("@angular/forms");
var dayjs = require("dayjs");
var toObject = require("dayjs/plugin/toObject");
var config_1 = require("../config");
var icons_1 = require("../utils/icons");
var i0 = require("@angular/core");
var i1 = require("../services/calendar.service");
var i2 = require("@angular/common");
var i3 = require("@ionic/angular");
var i4 = require("@angular/forms");
var i5 = require("./calendar-week.component");
var i6 = require("./month.component");
var i7 = require("./month-picker.component");
function CalendarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-button", 5);
    i0.ɵɵlistener("click", function CalendarComponent_ng_template_1_Template_ion_button_click_0_listener() { i0.ɵɵrestoreView(_r8); var ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.switchView()); });
    i0.ɵɵpipe(1, "date");
    i0.ɵɵtext(2);
    i0.ɵɵelement(3, "ion-icon", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-label", i0.ɵɵpipeBind2(1, 3, ctx_r0.getDate(ctx_r0.monthOpt.original.time), ctx_r0.MONTH_DATE_FORMAT));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0._monthFormat(ctx_r0.monthOpt.original.time), " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", ctx_r0._view === "days" ? ctx_r0._compatibleIcons.caretDown : ctx_r0._compatibleIcons.caretUp);
} }
function CalendarComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵpipe(1, "date");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-label", i0.ɵɵpipeBind2(1, 2, ctx_r2.getDate(ctx_r2.monthOpt.original.time), ctx_r2.MONTH_DATE_FORMAT));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2._monthFormat(ctx_r2.monthOpt.original.time), " ");
} }
function CalendarComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    var _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-button", 8);
    i0.ɵɵlistener("click", function CalendarComponent_ng_template_4_Template_ion_button_click_0_listener() { i0.ɵɵrestoreView(_r10); var ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.prev()); });
    i0.ɵɵelement(1, "ion-icon", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ion-button", 10);
    i0.ɵɵlistener("click", function CalendarComponent_ng_template_4_Template_ion_button_click_2_listener() { i0.ɵɵrestoreView(_r10); var ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.next()); });
    i0.ɵɵelement(3, "ion-icon", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", !ctx_r3.canBack());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", ctx_r3._compatibleIcons.chevronBack);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", !ctx_r3.canNext());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", ctx_r3._compatibleIcons.chevronForward);
} }
function CalendarComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    var _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelement(0, "ion-calendar-week", 11);
    i0.ɵɵelementStart(1, "ion-calendar-month", 12);
    i0.ɵɵlistener("ngModelChange", function CalendarComponent_ng_template_5_Template_ion_calendar_month_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r13); var ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12._calendarMonthValue = $event); })("change", function CalendarComponent_ng_template_5_Template_ion_calendar_month_change_1_listener($event) { i0.ɵɵrestoreView(_r13); var ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.onChanged($event)); })("swipe", function CalendarComponent_ng_template_5_Template_ion_calendar_month_swipe_1_listener($event) { i0.ɵɵrestoreView(_r13); var ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.swipeEvent($event)); })("select", function CalendarComponent_ng_template_5_Template_ion_calendar_month_select_1_listener($event) { i0.ɵɵrestoreView(_r13); var ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.select.emit($event)); })("selectStart", function CalendarComponent_ng_template_5_Template_ion_calendar_month_selectStart_1_listener($event) { i0.ɵɵrestoreView(_r13); var ctx_r17 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r17.selectStart.emit($event)); })("selectEnd", function CalendarComponent_ng_template_5_Template_ion_calendar_month_selectEnd_1_listener($event) { i0.ɵɵrestoreView(_r13); var ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.selectEnd.emit($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("weekArray", ctx_r4._d.weekdays)("weekStart", ctx_r4._d.weekStart);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("componentMode", true)("ngModel", ctx_r4._calendarMonthValue)("month", ctx_r4.monthOpt)("readonly", ctx_r4.readonly)("pickMode", ctx_r4._d.pickMode)("color", ctx_r4._d.color);
} }
function CalendarComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    var _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-calendar-month-picker", 13);
    i0.ɵɵlistener("select", function CalendarComponent_ng_template_6_Template_ion_calendar_month_picker_select_0_listener($event) { i0.ɵɵrestoreView(_r20); var ctx_r19 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r19.monthOnSelect($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("color", ctx_r6._d.color)("monthFormat", ctx_r6._options == null ? null : ctx_r6._options.monthPickerFormat)("month", ctx_r6.monthOpt);
} }
dayjs.extend(toObject);
exports.ION_CAL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: (0, core_1.forwardRef)(function () { return CalendarComponent; }),
    multi: true,
};
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(calSvc) {
        this.calSvc = calSvc;
        this._view = 'days';
        this._calendarMonthValue = [null, null];
        this._showToggleButtons = true;
        this._showMonthPicker = true;
        this.format = config_1.defaults.DATE_FORMAT;
        this.type = 'string';
        this.readonly = false;
        this.change = new core_1.EventEmitter();
        this.monthChange = new core_1.EventEmitter();
        this.select = new core_1.EventEmitter();
        this.selectStart = new core_1.EventEmitter();
        this.selectEnd = new core_1.EventEmitter();
        this.MONTH_DATE_FORMAT = 'MMMM yyyy';
        this._onChanged = function () { };
        this._onTouched = function () { };
        if ((0, icons_1.isIonIconsV4)()) {
            this._compatibleIcons = {
                caretDown: 'md-arrow-dropdown',
                caretUp: 'md-arrow-dropup',
                chevronBack: 'ios-arrow-back',
                chevronForward: 'ios-arrow-forward',
            };
        }
        else {
            this._compatibleIcons = {
                caretDown: 'caret-down-outline',
                caretUp: 'caret-up-outline',
                chevronBack: 'chevron-back-outline',
                chevronForward: 'chevron-forward-outline',
            };
        }
    }
    Object.defineProperty(CalendarComponent.prototype, "showToggleButtons", {
        get: function () {
            return this._showToggleButtons;
        },
        set: function (value) {
            this._showToggleButtons = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "showMonthPicker", {
        get: function () {
            return this._showMonthPicker;
        },
        set: function (value) {
            this._showMonthPicker = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (value) {
            this._options = value;
            this.initOpt();
            if (this.monthOpt && this.monthOpt.original) {
                this.monthOpt = this.createMonth(this.monthOpt.original.time);
            }
        },
        enumerable: false,
        configurable: true
    });
    CalendarComponent.prototype.ngOnInit = function () {
        this.initOpt();
        this.monthOpt = this.createMonth(new Date().getTime());
    };
    CalendarComponent.prototype.getViewDate = function () {
        return this._handleType(this.monthOpt.original.time);
    };
    CalendarComponent.prototype.getDate = function (date) {
        return new Date(date);
    };
    CalendarComponent.prototype.setViewDate = function (value) {
        this.monthOpt = this.createMonth(this._payloadToTimeNumber(value));
    };
    CalendarComponent.prototype.switchView = function () {
        this._view = this._view === 'days' ? 'month' : 'days';
    };
    CalendarComponent.prototype.prev = function () {
        if (this._view === 'days') {
            this.backMonth();
        }
        else {
            this.prevYear();
        }
    };
    CalendarComponent.prototype.next = function () {
        if (this._view === 'days') {
            this.nextMonth();
        }
        else {
            this.nextYear();
        }
    };
    CalendarComponent.prototype.prevYear = function () {
        if (dayjs(this.monthOpt.original.time).year() === 1970) {
            return;
        }
        var backTime = dayjs(this.monthOpt.original.time)
            .subtract(1, 'year')
            .valueOf();
        this.monthOpt = this.createMonth(backTime);
    };
    CalendarComponent.prototype.nextYear = function () {
        var nextTime = dayjs(this.monthOpt.original.time)
            .add(1, 'year')
            .valueOf();
        this.monthOpt = this.createMonth(nextTime);
    };
    CalendarComponent.prototype.nextMonth = function () {
        var nextTime = dayjs(this.monthOpt.original.time)
            .add(1, 'months')
            .valueOf();
        this.monthChange.emit({
            oldMonth: this.calSvc.multiFormat(this.monthOpt.original.time),
            newMonth: this.calSvc.multiFormat(nextTime),
        });
        this.monthOpt = this.createMonth(nextTime);
    };
    CalendarComponent.prototype.canNext = function () {
        if (!this._d.to || this._view !== 'days') {
            return true;
        }
        return this.monthOpt.original.time < dayjs(this._d.to).valueOf();
    };
    CalendarComponent.prototype.backMonth = function () {
        var backTime = dayjs(this.monthOpt.original.time)
            .subtract(1, 'months')
            .valueOf();
        this.monthChange.emit({
            oldMonth: this.calSvc.multiFormat(this.monthOpt.original.time),
            newMonth: this.calSvc.multiFormat(backTime),
        });
        this.monthOpt = this.createMonth(backTime);
    };
    CalendarComponent.prototype.canBack = function () {
        if (!this._d.from || this._view !== 'days') {
            return true;
        }
        return this.monthOpt.original.time > dayjs(this._d.from).valueOf();
    };
    CalendarComponent.prototype.monthOnSelect = function (month) {
        this._view = 'days';
        var newMonth = dayjs(this.monthOpt.original.time)
            .month(month)
            .valueOf();
        this.monthChange.emit({
            oldMonth: this.calSvc.multiFormat(this.monthOpt.original.time),
            newMonth: this.calSvc.multiFormat(newMonth),
        });
        this.monthOpt = this.createMonth(newMonth);
    };
    CalendarComponent.prototype.onChanged = function ($event) {
        switch (this._d.pickMode) {
            case config_1.pickModes.SINGLE:
                var date = this._handleType($event[0].time);
                this._onChanged(date);
                this.change.emit(date);
                break;
            case config_1.pickModes.RANGE:
                if ($event[0] && $event[1]) {
                    var rangeDate = {
                        from: this._handleType($event[0].time),
                        to: this._handleType($event[1].time),
                    };
                    this._onChanged(rangeDate);
                    this.change.emit(rangeDate);
                }
                break;
            case config_1.pickModes.MULTI:
                var dates = [];
                for (var i = 0; i < $event.length; i++) {
                    if ($event[i] && $event[i].time) {
                        dates.push(this._handleType($event[i].time));
                    }
                }
                this._onChanged(dates);
                this.change.emit(dates);
                break;
            default:
        }
    };
    CalendarComponent.prototype.swipeEvent = function ($event) {
        var isNext = $event.deltaX < 0;
        if (isNext && this.canNext()) {
            this.nextMonth();
        }
        else if (!isNext && this.canBack()) {
            this.backMonth();
        }
    };
    CalendarComponent.prototype._payloadToTimeNumber = function (value) {
        var date;
        if (this.type === 'string') {
            date = dayjs(value, this.format);
        }
        else {
            date = dayjs(value);
        }
        return date.valueOf();
    };
    CalendarComponent.prototype._monthFormat = function (date) {
        return dayjs(date).format(this._d.monthFormat.replace(/y/g, 'Y'));
    };
    CalendarComponent.prototype.initOpt = function () {
        if (this._options && typeof this._options.showToggleButtons === 'boolean') {
            this.showToggleButtons = this._options.showToggleButtons;
        }
        if (this._options && typeof this._options.showMonthPicker === 'boolean') {
            this.showMonthPicker = this._options.showMonthPicker;
            if (this._view !== 'days' && !this.showMonthPicker) {
                this._view = 'days';
            }
        }
        this._d = this.calSvc.safeOpt(this._options || {});
    };
    CalendarComponent.prototype.createMonth = function (date) {
        return this.calSvc.createMonthsByPeriod(date, 1, this._d)[0];
    };
    CalendarComponent.prototype._createCalendarDay = function (value) {
        return this.calSvc.createCalendarDay(this._payloadToTimeNumber(value), this._d);
    };
    CalendarComponent.prototype._handleType = function (value) {
        var date = dayjs(value);
        switch (this.type) {
            case 'string':
                return date.format(this.format);
            case 'js-date':
                return date.toDate();
            case 'dayjs':
                return date;
            case 'time':
                return date.valueOf();
            case 'object':
                return date.toObject();
        }
    };
    CalendarComponent.prototype.writeValue = function (obj) {
        this._writeValue(obj);
        if (obj) {
            if (this._calendarMonthValue[0]) {
                this.monthOpt = this.createMonth(this._calendarMonthValue[0].time);
            }
            else {
                this.monthOpt = this.createMonth(new Date().getTime());
            }
        }
    };
    CalendarComponent.prototype.registerOnChange = function (fn) {
        this._onChanged = fn;
    };
    CalendarComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    CalendarComponent.prototype._writeValue = function (value) {
        var _this = this;
        if (!value) {
            this._calendarMonthValue = [null, null];
            return;
        }
        switch (this._d.pickMode) {
            case 'single':
                this._calendarMonthValue[0] = this._createCalendarDay(value);
                break;
            case 'range':
                if (value.from) {
                    this._calendarMonthValue[0] = value.from ? this._createCalendarDay(value.from) : null;
                }
                if (value.to) {
                    this._calendarMonthValue[1] = value.to ? this._createCalendarDay(value.to) : null;
                }
                break;
            case 'multi':
                if (Array.isArray(value)) {
                    this._calendarMonthValue = value.map(function (e) {
                        return _this._createCalendarDay(e);
                    });
                }
                else {
                    this._calendarMonthValue = [null, null];
                }
                break;
            default:
        }
    };
    CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(i0.ɵɵdirectiveInject(i1.CalendarService)); };
    CalendarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CalendarComponent, selectors: [["ion-calendar"]], inputs: { format: "format", type: "type", readonly: "readonly", options: "options" }, outputs: { change: "change", monthChange: "monthChange", select: "select", selectStart: "selectStart", selectEnd: "selectEnd" }, features: [i0.ɵɵProvidersFeature([exports.ION_CAL_VALUE_ACCESSOR])], decls: 8, vars: 5, consts: [[1, "title"], [3, "ngIf", "ngIfElse"], ["title", ""], [3, "ngIf"], ["monthPicker", ""], ["type", "button", "fill", "clear", 1, "switch-btn", 3, "click"], [1, "arrow-dropdown", 3, "name"], [1, "switch-btn"], ["type", "button", "fill", "clear", 1, "back", 3, "disabled", "click"], ["slot", "icon-only", "size", "small", 3, "name"], ["type", "button", "fill", "clear", 1, "forward", 3, "disabled", "click"], ["color", "transparent", 3, "weekArray", "weekStart"], [3, "componentMode", "ngModel", "month", "readonly", "pickMode", "color", "ngModelChange", "change", "swipe", "select", "selectStart", "selectEnd"], [3, "color", "monthFormat", "month", "select"]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, CalendarComponent_ng_template_1_Template, 4, 6, "ng-template", 1);
            i0.ɵɵtemplate(2, CalendarComponent_ng_template_2_Template, 3, 5, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, CalendarComponent_ng_template_4_Template, 4, 4, "ng-template", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, CalendarComponent_ng_template_5_Template, 2, 8, "ng-template", 1);
            i0.ɵɵtemplate(6, CalendarComponent_ng_template_6_Template, 1, 3, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            var _r1 = i0.ɵɵreference(3);
            var _r5 = i0.ɵɵreference(7);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx._showMonthPicker)("ngIfElse", _r1);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx._showToggleButtons);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx._view === "days")("ngIfElse", _r5);
        } }, dependencies: [i2.NgIf, i3.IonButton, i3.IonIcon, i4.NgControlStatus, i4.NgModel, i5.CalendarWeekComponent, i6.MonthComponent, i7.MonthPickerComponent, i2.DatePipe], styles: ["[_nghost-%COMP%] {\n  padding: 10px 20px;\n  box-sizing: border-box;\n  display: inline-block;\n  background-color: #fff;\n  width: 100%;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding: 0 40px 0 40px;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .forward[_ngcontent-%COMP%], [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .switch-btn[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  float: left;\n  min-height: 32px;\n  margin: 0;\n  padding: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  font-size: 15px;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], [_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .forward[_ngcontent-%COMP%] {\n  color: #757575;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  margin-left: -100%;\n  left: -40px;\n  width: 40px;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .forward[_ngcontent-%COMP%] {\n  margin-left: -40px;\n  right: -40px;\n  width: 40px;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .switch-btn[_ngcontent-%COMP%] {\n  --margin-top: 0;\n  --margin-bottom: 0;\n  --margin-start: auto;\n  --margin-end: auto;\n  width: 100%;\n  text-align: center;\n  line-height: 32px;\n  color: #757575;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .switch-btn[_ngcontent-%COMP%]   .arrow-dropdown[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}"] });
    return CalendarComponent;
}());
exports.CalendarComponent = CalendarComponent;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalendarComponent, [{
        type: core_1.Component,
        args: [{ selector: 'ion-calendar', providers: [exports.ION_CAL_VALUE_ACCESSOR], template: "\n    <div class=\"title\">\n      <ng-template [ngIf]=\"_showMonthPicker\" [ngIfElse]=\"title\">\n        <ion-button type=\"button\"\n                    fill=\"clear\"\n                    class=\"switch-btn\"\n                    [attr.aria-label]=\"getDate(monthOpt.original.time) | date:MONTH_DATE_FORMAT\"\n                    (click)=\"switchView()\">\n          {{ _monthFormat(monthOpt.original.time) }}\n          <ion-icon class=\"arrow-dropdown\"\n                    [name]=\"_view === 'days' ? _compatibleIcons.caretDown : _compatibleIcons.caretUp\"></ion-icon>\n        </ion-button>\n      </ng-template>\n      <ng-template #title>\n        <div class=\"switch-btn\"\n             [attr.aria-label]=\"getDate(monthOpt.original.time) | date:MONTH_DATE_FORMAT\">\n          {{ _monthFormat(monthOpt.original.time) }}\n        </div>\n      </ng-template>\n      <ng-template [ngIf]=\"_showToggleButtons\">\n        <ion-button type=\"button\" fill=\"clear\" class=\"back\" [disabled]=\"!canBack()\" (click)=\"prev()\">\n          <ion-icon slot=\"icon-only\" size=\"small\" [name]=\"_compatibleIcons.chevronBack\"></ion-icon>\n        </ion-button>\n        <ion-button type=\"button\" fill=\"clear\" class=\"forward\" [disabled]=\"!canNext()\" (click)=\"next()\">\n          <ion-icon slot=\"icon-only\" size=\"small\" [name]=\"_compatibleIcons.chevronForward\"></ion-icon>\n        </ion-button>\n      </ng-template>\n    </div>\n    <ng-template [ngIf]=\"_view === 'days'\" [ngIfElse]=\"monthPicker\">\n      <ion-calendar-week color=\"transparent\"\n                         [weekArray]=\"_d.weekdays\"\n                         [weekStart]=\"_d.weekStart\">\n      </ion-calendar-week>\n\n      <ion-calendar-month [componentMode]=\"true\"\n                          [(ngModel)]=\"_calendarMonthValue\"\n                          [month]=\"monthOpt\"\n                          [readonly]=\"readonly\"\n                          (change)=\"onChanged($event)\"\n                          (swipe)=\"swipeEvent($event)\"\n                          (select)=\"select.emit($event)\"\n                          (selectStart)=\"selectStart.emit($event)\"\n                          (selectEnd)=\"selectEnd.emit($event)\"\n                          [pickMode]=\"_d.pickMode\"\n                          [color]=\"_d.color\">\n      </ion-calendar-month>\n    </ng-template>\n\n    <ng-template #monthPicker>\n      <ion-calendar-month-picker [color]=\"_d.color\"\n                                 [monthFormat]=\"_options?.monthPickerFormat\"\n                                 (select)=\"monthOnSelect($event)\"\n                                 [month]=\"monthOpt\">\n      </ion-calendar-month-picker>\n    </ng-template>\n  ", styles: [":host {\n  padding: 10px 20px;\n  box-sizing: border-box;\n  display: inline-block;\n  background-color: #fff;\n  width: 100%;\n}\n:host .title {\n  padding: 0 40px 0 40px;\n  overflow: hidden;\n}\n:host .title .back,\n:host .title .forward,\n:host .title .switch-btn {\n  display: block;\n  position: relative;\n  float: left;\n  min-height: 32px;\n  margin: 0;\n  padding: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  font-size: 15px;\n}\n:host .title .back,\n:host .title .forward {\n  color: #757575;\n}\n:host .title .back {\n  margin-left: -100%;\n  left: -40px;\n  width: 40px;\n}\n:host .title .forward {\n  margin-left: -40px;\n  right: -40px;\n  width: 40px;\n}\n:host .title .switch-btn {\n  --margin-top: 0;\n  --margin-bottom: 0;\n  --margin-start: auto;\n  --margin-end: auto;\n  width: 100%;\n  text-align: center;\n  line-height: 32px;\n  color: #757575;\n}\n:host .title .switch-btn .arrow-dropdown {\n  margin-left: 5px;\n}"] }]
    }], function () { return [{ type: i1.CalendarService }]; }, { format: [{
            type: core_1.Input
        }], type: [{
            type: core_1.Input
        }], readonly: [{
            type: core_1.Input
        }], change: [{
            type: core_1.Output
        }], monthChange: [{
            type: core_1.Output
        }], select: [{
            type: core_1.Output
        }], selectStart: [{
            type: core_1.Output
        }], selectEnd: [{
            type: core_1.Output
        }], options: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=calendar.component.js.map