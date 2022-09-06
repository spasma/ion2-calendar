"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarModal = void 0;
var core_1 = require("@angular/core");
var angular_1 = require("@ionic/angular");
var calendar_service_1 = require("../services/calendar.service");
var dayjs = require("dayjs");
var config_1 = require("../config");
var i0 = require("@angular/core");
var i1 = require("@ionic/angular");
var i2 = require("../services/calendar.service");
var i3 = require("@angular/common");
var i4 = require("@angular/forms");
var i5 = require("./calendar-week.component");
var i6 = require("./month.component");
var _c0 = ["months"];
function CalendarModal_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0._d.closeLabel);
} }
function CalendarModal_ion_icon_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-icon", 13);
} }
function CalendarModal_ion_button_9_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r6._d.clearLabel);
} }
function CalendarModal_ion_button_9_Template(rf, ctx) { if (rf & 1) {
    var _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-button", 14);
    i0.ɵɵlistener("click", function CalendarModal_ion_button_9_Template_ion_button_click_0_listener() { i0.ɵɵrestoreView(_r8); var ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.clear()); });
    i0.ɵɵtemplate(1, CalendarModal_ion_button_9_span_1_Template, 2, 1, "span", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", !ctx_r2.canClear());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2._d.clearLabel !== "");
} }
function CalendarModal_ion_button_10_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r9._d.doneLabel);
} }
function CalendarModal_ion_button_10_ion_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ion-icon", 17);
} }
function CalendarModal_ion_button_10_Template(rf, ctx) { if (rf & 1) {
    var _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-button", 15);
    i0.ɵɵlistener("click", function CalendarModal_ion_button_10_Template_ion_button_click_0_listener() { i0.ɵɵrestoreView(_r12); var ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.done()); });
    i0.ɵɵtemplate(1, CalendarModal_ion_button_10_span_1_Template, 2, 1, "span", 3);
    i0.ɵɵtemplate(2, CalendarModal_ion_button_10_ion_icon_2_Template, 1, 0, "ion-icon", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", !ctx_r3.canDone());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3._d.doneLabel !== "" && !ctx_r3._d.doneIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3._d.doneIcon);
} }
function CalendarModal_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    var _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18)(1, "h4", 19);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ion-calendar-month", 20);
    i0.ɵɵlistener("change", function CalendarModal_ng_template_16_Template_ion_calendar_month_change_3_listener($event) { i0.ɵɵrestoreView(_r16); var ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.onChange($event)); })("ngModelChange", function CalendarModal_ng_template_16_Template_ion_calendar_month_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r16); var ctx_r17 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r17.datesTemp = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    var month_r13 = ctx.$implicit;
    var i_r14 = ctx.index;
    var ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵattribute("id", "month-" + i_r14);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r5._monthFormat(month_r13.original.date));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("month", month_r13)("pickMode", ctx_r5._d.pickMode)("isSaveHistory", ctx_r5._d.isSaveHistory)("id", ctx_r5._d.id)("color", ctx_r5._d.color)("ngModel", ctx_r5.datesTemp);
} }
var _c1 = [[["", "sub-header", ""]]];
var _c2 = function (a0) { return { "multi-selection": a0 }; };
var _c3 = ["[sub-header]"];
var NUM_OF_MONTHS_TO_CREATE = 3;
var CalendarModal = /** @class */ (function () {
    function CalendarModal(_renderer, _elementRef, params, modalCtrl, ref, calSvc) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.params = params;
        this.modalCtrl = modalCtrl;
        this.ref = ref;
        this.calSvc = calSvc;
        this.ionPage = true;
        this.datesTemp = [null, null];
        this._scrollLock = true;
    }
    CalendarModal.prototype.ngOnInit = function () {
        this.init();
        this.initDefaultDate();
    };
    CalendarModal.prototype.ngAfterViewInit = function () {
        this.findCssClass();
        if (this._d.canBackwardsSelected)
            this.backwardsMonth();
        this.scrollToDefaultDate();
    };
    CalendarModal.prototype.init = function () {
        this._d = this.calSvc.safeOpt(this.options);
        this._d.showAdjacentMonthDay = false;
        this.step = this._d.step;
        if (this.step < this.calSvc.DEFAULT_STEP) {
            this.step = this.calSvc.DEFAULT_STEP;
        }
        this.calendarMonths = this.calSvc.createMonthsByPeriod(dayjs(this._d.from).valueOf(), this.findInitMonthNumber(this._d.defaultScrollTo) + this.step, this._d);
    };
    CalendarModal.prototype.initDefaultDate = function () {
        var _this = this;
        var _a = this._d, pickMode = _a.pickMode, defaultDate = _a.defaultDate, defaultDateRange = _a.defaultDateRange, defaultDates = _a.defaultDates;
        switch (pickMode) {
            case config_1.pickModes.SINGLE:
                if (defaultDate) {
                    this.datesTemp[0] = this.calSvc.createCalendarDay(this._getDayTime(defaultDate), this._d);
                }
                break;
            case config_1.pickModes.RANGE:
                if (defaultDateRange) {
                    if (defaultDateRange.from) {
                        this.datesTemp[0] = this.calSvc.createCalendarDay(this._getDayTime(defaultDateRange.from), this._d);
                    }
                    if (defaultDateRange.to) {
                        this.datesTemp[1] = this.calSvc.createCalendarDay(this._getDayTime(defaultDateRange.to), this._d);
                    }
                }
                break;
            case config_1.pickModes.MULTI:
                if (defaultDates && defaultDates.length) {
                    this.datesTemp = defaultDates.map(function (e) { return _this.calSvc.createCalendarDay(_this._getDayTime(e), _this._d); });
                }
                break;
            default:
                this.datesTemp = [null, null];
        }
    };
    CalendarModal.prototype.findCssClass = function () {
        var _this = this;
        var cssClass = this._d.cssClass;
        if (cssClass) {
            cssClass.split(' ').forEach(function (_class) {
                if (_class.trim() !== '')
                    _this._renderer.addClass(_this._elementRef.nativeElement, _class);
            });
        }
    };
    CalendarModal.prototype.onChange = function (data) {
        var _a = this._d, pickMode = _a.pickMode, autoDone = _a.autoDone;
        this.datesTemp = data;
        this.ref.detectChanges();
        if (pickMode !== config_1.pickModes.MULTI && autoDone && this.canDone()) {
            this.done();
        }
        this.repaintDOM();
    };
    CalendarModal.prototype.onCancel = function () {
        this.modalCtrl.dismiss(null, 'cancel');
    };
    CalendarModal.prototype.done = function () {
        var pickMode = this._d.pickMode;
        this.modalCtrl.dismiss(this.calSvc.wrapResult(this.datesTemp, pickMode), 'done');
    };
    CalendarModal.prototype.canDone = function () {
        if (!Array.isArray(this.datesTemp)) {
            return false;
        }
        var _a = this._d, pickMode = _a.pickMode, defaultEndDateToStartDate = _a.defaultEndDateToStartDate;
        switch (pickMode) {
            case config_1.pickModes.SINGLE:
                return !!(this.datesTemp[0] && this.datesTemp[0].time);
            case config_1.pickModes.RANGE:
                if (defaultEndDateToStartDate) {
                    return !!(this.datesTemp[0] && this.datesTemp[0].time);
                }
                return !!(this.datesTemp[0] && this.datesTemp[1]) && !!(this.datesTemp[0].time && this.datesTemp[1].time);
            case config_1.pickModes.MULTI:
                return this.datesTemp.length > 0 && this.datesTemp.every(function (e) { return !!e && !!e.time; });
            default:
                return false;
        }
    };
    CalendarModal.prototype.clear = function () {
        this.datesTemp = [null, null];
    };
    CalendarModal.prototype.canClear = function () {
        return !!this.datesTemp[0];
    };
    CalendarModal.prototype.nextMonth = function (event) {
        var _a;
        var len = this.calendarMonths.length;
        var final = this.calendarMonths[len - 1];
        var nextTime = dayjs(final.original.time)
            .add(1, 'M')
            .valueOf();
        var rangeEnd = this._d.to ? dayjs(this._d.to).subtract(1, 'M') : 0;
        if (len <= 0 || (rangeEnd !== 0 && dayjs(final.original.time).isAfter(rangeEnd))) {
            event.target.disabled = true;
            return;
        }
        (_a = this.calendarMonths).push.apply(_a, this.calSvc.createMonthsByPeriod(nextTime, NUM_OF_MONTHS_TO_CREATE, this._d));
        event.target.complete();
        this.repaintDOM();
    };
    CalendarModal.prototype.backwardsMonth = function () {
        var _a;
        var first = this.calendarMonths[0];
        if (first.original.time <= 0) {
            this._d.canBackwardsSelected = false;
            return;
        }
        var firstTime = (this.actualFirstTime = dayjs(first.original.time)
            .subtract(NUM_OF_MONTHS_TO_CREATE, 'M')
            .valueOf());
        (_a = this.calendarMonths).unshift.apply(_a, this.calSvc.createMonthsByPeriod(firstTime, NUM_OF_MONTHS_TO_CREATE, this._d));
        this.ref.detectChanges();
        this.repaintDOM();
    };
    CalendarModal.prototype.scrollToDate = function (date) {
        var _this = this;
        var defaultDateIndex = this.findInitMonthNumber(date);
        var monthElement = this.monthsEle.nativeElement.children["month-".concat(defaultDateIndex)];
        var domElemReadyWaitTime = 300;
        setTimeout(function () {
            var defaultDateMonth = monthElement ? monthElement.offsetTop : 0;
            if (defaultDateIndex !== -1 && defaultDateMonth !== 0) {
                _this.content.scrollByPoint(0, defaultDateMonth, 128);
            }
        }, domElemReadyWaitTime);
    };
    CalendarModal.prototype.scrollToDefaultDate = function () {
        this.scrollToDate(this._d.defaultScrollTo);
    };
    CalendarModal.prototype.onScroll = function ($event) {
        var _this = this;
        if (!this._d.canBackwardsSelected)
            return;
        var detail = $event.detail;
        if (detail.scrollTop <= 200 && detail.velocityY < 0 && this._scrollLock) {
            this.content.getScrollElement().then(function (scrollElem) {
                _this._scrollLock = !1;
                var heightBeforeMonthPrepend = scrollElem.scrollHeight;
                _this.backwardsMonth();
                setTimeout(function () {
                    var heightAfterMonthPrepend = scrollElem.scrollHeight;
                    _this.content.scrollByPoint(0, heightAfterMonthPrepend - heightBeforeMonthPrepend, 0).then(function () {
                        _this._scrollLock = !0;
                    });
                }, 180);
            });
        }
    };
    /**
     * In some older Safari versions (observed at Mac's Safari 10.0), there is an issue where style updates to
     * shadowRoot descendants don't cause a browser repaint.
     * See for more details: https://github.com/Polymer/polymer/issues/4701
     */
    CalendarModal.prototype.repaintDOM = function () {
        var _this = this;
        return this.content.getScrollElement().then(function (scrollElem) {
            // Update scrollElem to ensure that height of the container changes as Months are appended/prepended
            scrollElem.style.zIndex = '2';
            scrollElem.style.zIndex = 'initial';
            // Update monthsEle to ensure selected state is reflected when tapping on a day
            _this.monthsEle.nativeElement.style.zIndex = '2';
            _this.monthsEle.nativeElement.style.zIndex = 'initial';
        });
    };
    CalendarModal.prototype.findInitMonthNumber = function (date) {
        var startDate = this.actualFirstTime ? dayjs(this.actualFirstTime) : dayjs(this._d.from);
        var defaultScrollTo = dayjs(date);
        var isAfter = defaultScrollTo.isAfter(startDate);
        if (!isAfter)
            return -1;
        if (this.showYearPicker) {
            startDate = dayjs(new Date(this.year, 0, 1));
        }
        return defaultScrollTo.diff(startDate, 'month');
    };
    CalendarModal.prototype._getDayTime = function (date) {
        return dayjs(dayjs(date).format('YYYY-MM-DD')).valueOf();
    };
    CalendarModal.prototype._monthFormat = function (date) {
        return dayjs(date).format(this._d.monthFormat.replace(/y/g, 'Y'));
    };
    CalendarModal.prototype.trackByIndex = function (index, dayjsDate) {
        return dayjsDate.original ? dayjsDate.original.time : index;
    };
    CalendarModal.ɵfac = function CalendarModal_Factory(t) { return new (t || CalendarModal)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NavParams), i0.ɵɵdirectiveInject(i1.ModalController), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.CalendarService)); };
    CalendarModal.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CalendarModal, selectors: [["ion-calendar-modal"]], viewQuery: function CalendarModal_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(angular_1.IonContent, 5);
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.monthsEle = _t.first);
        } }, hostVars: 2, hostBindings: function CalendarModal_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ion-page", ctx.ionPage);
        } }, inputs: { options: "options" }, ngContentSelectors: _c3, decls: 19, vars: 15, consts: [[3, "color"], ["slot", "start"], ["type", "button", "slot", "icon-only", "fill", "clear", 3, "click"], [4, "ngIf"], ["name", "close", 4, "ngIf"], ["slot", "end"], ["type", "button", "fill", "clear", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "slot", "icon-only", "fill", "clear", 3, "disabled", "click", 4, "ngIf"], [3, "color", "weekArray", "weekStart"], [1, "calendar-page", 3, "scrollEvents", "ngClass", "ionScroll"], ["months", ""], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], ["threshold", "25%", 3, "ionInfinite"], ["name", "close"], ["type", "button", "fill", "clear", 3, "disabled", "click"], ["type", "button", "slot", "icon-only", "fill", "clear", 3, "disabled", "click"], ["name", "checkmark", 4, "ngIf"], ["name", "checkmark"], [1, "month-box"], [1, "text-center", "month-title"], [3, "month", "pickMode", "isSaveHistory", "id", "color", "ngModel", "change", "ngModelChange"]], template: function CalendarModal_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1)(3, "ion-button", 2);
            i0.ɵɵlistener("click", function CalendarModal_Template_ion_button_click_3_listener() { return ctx.onCancel(); });
            i0.ɵɵtemplate(4, CalendarModal_span_4_Template, 2, 1, "span", 3);
            i0.ɵɵtemplate(5, CalendarModal_ion_icon_5_Template, 1, 0, "ion-icon", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "ion-title");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "ion-buttons", 5);
            i0.ɵɵtemplate(9, CalendarModal_ion_button_9_Template, 2, 2, "ion-button", 6);
            i0.ɵɵtemplate(10, CalendarModal_ion_button_10_Template, 3, 3, "ion-button", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵprojection(11);
            i0.ɵɵelement(12, "ion-calendar-week", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "ion-content", 9);
            i0.ɵɵlistener("ionScroll", function CalendarModal_Template_ion_content_ionScroll_13_listener($event) { return ctx.onScroll($event); });
            i0.ɵɵelementStart(14, "div", null, 10);
            i0.ɵɵtemplate(16, CalendarModal_ng_template_16_Template, 4, 8, "ng-template", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "ion-infinite-scroll", 12);
            i0.ɵɵlistener("ionInfinite", function CalendarModal_Template_ion_infinite_scroll_ionInfinite_17_listener($event) { return ctx.nextMonth($event); });
            i0.ɵɵelement(18, "ion-infinite-scroll-content");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("color", ctx._d.color);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx._d.closeLabel !== "" && !ctx._d.closeIcon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx._d.closeIcon);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx._d.title);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !!ctx._d.clearLabel);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx._d.autoDone);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("color", ctx._d.color)("weekArray", ctx._d.weekdays)("weekStart", ctx._d.weekStart);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("scrollEvents", true)("ngClass", i0.ɵɵpureFunction1(13, _c2, ctx._d.pickMode === "multi"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.calendarMonths)("ngForTrackBy", ctx.trackByIndex);
        } }, dependencies: [i3.NgClass, i3.NgForOf, i3.NgIf, i1.IonButton, i1.IonButtons, i1.IonContent, i1.IonHeader, i1.IonIcon, i1.IonInfiniteScroll, i1.IonInfiniteScrollContent, i1.IonTitle, i1.IonToolbar, i4.NgControlStatus, i4.NgModel, i5.CalendarWeekComponent, i6.MonthComponent], styles: ["[_nghost-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n[_nghost-%COMP%]   ion-select[_ngcontent-%COMP%]   .select-icon[_ngcontent-%COMP%]    > .select-icon-inner[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-select[_ngcontent-%COMP%]   .select-text[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n[_nghost-%COMP%]   ion-select.select-ios[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n[_nghost-%COMP%]   .calendar-page[_ngcontent-%COMP%] {\n  background-color: #fbfbfb;\n}\n[_nghost-%COMP%]   .month-box[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding-bottom: 1em;\n  border-bottom: 1px solid #f1f1f1;\n}\n[_nghost-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 1.1rem;\n  display: block;\n  text-align: center;\n  margin: 1rem 0 0;\n  color: #929292;\n}"] });
    return CalendarModal;
}());
exports.CalendarModal = CalendarModal;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalendarModal, [{
        type: core_1.Component,
        args: [{ selector: 'ion-calendar-modal', template: "\n    <ion-header>\n      <ion-toolbar [color]=\"_d.color\">\n          <ion-buttons slot=\"start\">\n              <ion-button type='button' slot=\"icon-only\" fill=\"clear\" (click)=\"onCancel()\">\n              <span *ngIf=\"_d.closeLabel !== '' && !_d.closeIcon\">{{ _d.closeLabel }}</span>\n              <ion-icon *ngIf=\"_d.closeIcon\" name=\"close\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n\n          <ion-title>{{ _d.title }}</ion-title>\n\n          <ion-buttons slot=\"end\">\n            <ion-button type='button' *ngIf=\"!!_d.clearLabel\" fill=\"clear\" [disabled]=\"!canClear()\" (click)=\"clear()\">\n              <span *ngIf=\"_d.clearLabel !== ''\">{{ _d.clearLabel }}</span>\n            </ion-button>\n            <ion-button type='button' slot=\"icon-only\" *ngIf=\"!_d.autoDone\" fill=\"clear\" [disabled]=\"!canDone()\" (click)=\"done()\">\n              <span *ngIf=\"_d.doneLabel !== '' && !_d.doneIcon\">{{ _d.doneLabel }}</span>\n              <ion-icon *ngIf=\"_d.doneIcon\" name=\"checkmark\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n      </ion-toolbar>\n\n      <ng-content select=\"[sub-header]\"></ng-content>\n\n      <ion-calendar-week\n        [color]=\"_d.color\"\n        [weekArray]=\"_d.weekdays\"\n        [weekStart]=\"_d.weekStart\">\n      </ion-calendar-week>\n\n    </ion-header>\n\n    <ion-content (ionScroll)=\"onScroll($event)\" class=\"calendar-page\" [scrollEvents]=\"true\"\n                 [ngClass]=\"{'multi-selection': _d.pickMode === 'multi'}\">\n\n      <div #months>\n        <ng-template ngFor let-month [ngForOf]=\"calendarMonths\" [ngForTrackBy]=\"trackByIndex\" let-i=\"index\">\n          <div class=\"month-box\" [attr.id]=\"'month-' + i\">\n            <h4 class=\"text-center month-title\">{{ _monthFormat(month.original.date) }}</h4>\n            <ion-calendar-month [month]=\"month\"\n                                [pickMode]=\"_d.pickMode\"\n                                [isSaveHistory]=\"_d.isSaveHistory\"\n                                [id]=\"_d.id\"\n                                [color]=\"_d.color\"\n                                (change)=\"onChange($event)\"\n                                [(ngModel)]=\"datesTemp\">\n            </ion-calendar-month>\n          </div>\n        </ng-template>\n\n      </div>\n\n      <ion-infinite-scroll threshold=\"25%\" (ionInfinite)=\"nextMonth($event)\">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n    </ion-content>\n  ", styles: [":host ion-select {\n  max-width: unset;\n}\n:host ion-select .select-icon > .select-icon-inner,\n:host ion-select .select-text {\n  color: #fff !important;\n}\n:host ion-select.select-ios {\n  max-width: unset;\n}\n:host .calendar-page {\n  background-color: #fbfbfb;\n}\n:host .month-box {\n  display: inline-block;\n  width: 100%;\n  padding-bottom: 1em;\n  border-bottom: 1px solid #f1f1f1;\n}\n:host h4 {\n  font-weight: 400;\n  font-size: 1.1rem;\n  display: block;\n  text-align: center;\n  margin: 1rem 0 0;\n  color: #929292;\n}"] }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.NavParams }, { type: i1.ModalController }, { type: i0.ChangeDetectorRef }, { type: i2.CalendarService }]; }, { content: [{
            type: core_1.ViewChild,
            args: [angular_1.IonContent]
        }], monthsEle: [{
            type: core_1.ViewChild,
            args: ['months']
        }], ionPage: [{
            type: core_1.HostBinding,
            args: ['class.ion-page']
        }], options: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=calendar.modal.js.map