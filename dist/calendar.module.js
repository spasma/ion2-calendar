"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarModule = exports.calendarController = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var angular_1 = require("@ionic/angular");
var calendar_controller_1 = require("./calendar.controller");
var calendar_options_provider_1 = require("./services/calendar-options.provider");
var calendar_service_1 = require("./services/calendar.service");
var components_1 = require("./components");
var i0 = require("@angular/core");
var i1 = require("./components/calendar.modal");
var i2 = require("./components/calendar-week.component");
var i3 = require("./components/month.component");
var i4 = require("./components/calendar.component");
var i5 = require("./components/month-picker.component");
function calendarController(modalCtrl, calSvc) {
    return new calendar_controller_1.CalendarController(modalCtrl, calSvc);
}
exports.calendarController = calendarController;
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule.forRoot = function (defaultOptions) {
        if (defaultOptions === void 0) { defaultOptions = {}; }
        return {
            ngModule: CalendarModule,
            providers: [
                { provide: calendar_options_provider_1.DEFAULT_CALENDAR_OPTIONS, useValue: defaultOptions }
            ]
        };
    };
    CalendarModule.ɵfac = function CalendarModule_Factory(t) { return new (t || CalendarModule)(); };
    CalendarModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CalendarModule });
    CalendarModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
            calendar_service_1.CalendarService,
            {
                provide: calendar_controller_1.CalendarController,
                useFactory: calendarController,
                deps: [angular_1.ModalController, calendar_service_1.CalendarService],
            },
        ], imports: [common_1.CommonModule, angular_1.IonicModule, forms_1.FormsModule] });
    return CalendarModule;
}());
exports.CalendarModule = CalendarModule;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalendarModule, [{
        type: core_1.NgModule,
        args: [{
                imports: [common_1.CommonModule, angular_1.IonicModule, forms_1.FormsModule],
                declarations: components_1.CALENDAR_COMPONENTS,
                exports: components_1.CALENDAR_COMPONENTS,
                entryComponents: components_1.CALENDAR_COMPONENTS,
                providers: [
                    calendar_service_1.CalendarService,
                    {
                        provide: calendar_controller_1.CalendarController,
                        useFactory: calendarController,
                        deps: [angular_1.ModalController, calendar_service_1.CalendarService],
                    },
                ],
                schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CalendarModule, { declarations: [i1.CalendarModal, i2.CalendarWeekComponent, i3.MonthComponent, i4.CalendarComponent, i5.MonthPickerComponent], imports: [common_1.CommonModule, angular_1.IonicModule, forms_1.FormsModule], exports: [i1.CalendarModal, i2.CalendarWeekComponent, i3.MonthComponent, i4.CalendarComponent, i5.MonthPickerComponent] }); })();
//# sourceMappingURL=calendar.module.js.map