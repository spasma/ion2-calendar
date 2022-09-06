"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarController = void 0;
var core_1 = require("@angular/core");
var angular_1 = require("@ionic/angular");
var calendar_modal_1 = require("./components/calendar.modal");
var calendar_service_1 = require("./services/calendar.service");
var i0 = require("@angular/core");
var i1 = require("@ionic/angular");
var i2 = require("./services/calendar.service");
var CalendarController = /** @class */ (function () {
    function CalendarController(modalCtrl, calSvc) {
        this.modalCtrl = modalCtrl;
        this.calSvc = calSvc;
    }
    /**
     * @deprecated
     * @param {CalendarModalOptions} calendarOptions
     * @param {ModalOptions} modalOptions
     * @returns {any}
     */
    CalendarController.prototype.openCalendar = function (calendarOptions, modalOptions) {
        if (modalOptions === void 0) { modalOptions = {}; }
        var options = this.calSvc.safeOpt(calendarOptions);
        return this.modalCtrl
            .create(__assign({ component: calendar_modal_1.CalendarModal, componentProps: {
                options: options,
            } }, modalOptions))
            .then(function (calendarModal) {
            calendarModal.present();
            return calendarModal.onDidDismiss().then(function (event) {
                return event.data ? Promise.resolve(event.data) : Promise.reject('cancelled');
            });
        });
    };
    CalendarController.ɵfac = function CalendarController_Factory(t) { return new (t || CalendarController)(i0.ɵɵinject(i1.ModalController), i0.ɵɵinject(i2.CalendarService)); };
    CalendarController.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CalendarController, factory: CalendarController.ɵfac });
    return CalendarController;
}());
exports.CalendarController = CalendarController;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalendarController, [{
        type: core_1.Injectable
    }], function () { return [{ type: i1.ModalController }, { type: i2.CalendarService }]; }, null); })();
//# sourceMappingURL=calendar.controller.js.map