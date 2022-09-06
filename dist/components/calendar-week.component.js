"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarWeekComponent = void 0;
var core_1 = require("@angular/core");
var config_1 = require("../config");
var i0 = require("@angular/core");
var i1 = require("@angular/common");
var i2 = require("@ionic/angular");
function CalendarWeekComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var w_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(w_r1);
} }
var CalendarWeekComponent = /** @class */ (function () {
    function CalendarWeekComponent() {
        this._weekArray = config_1.defaults.WEEKS_FORMAT;
        this._displayWeekArray = this._weekArray;
        this._weekStart = 0;
        this.color = config_1.defaults.COLOR;
    }
    Object.defineProperty(CalendarWeekComponent.prototype, "weekArray", {
        set: function (value) {
            if (value && value.length === 7) {
                this._weekArray = __spreadArray([], value, true);
                this.adjustSort();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarWeekComponent.prototype, "weekStart", {
        set: function (value) {
            if (value === 0 || value === 1) {
                this._weekStart = value;
                this.adjustSort();
            }
        },
        enumerable: false,
        configurable: true
    });
    CalendarWeekComponent.prototype.adjustSort = function () {
        if (this._weekStart === 1) {
            var cacheWeekArray = __spreadArray([], this._weekArray, true);
            cacheWeekArray.push(cacheWeekArray.shift());
            this._displayWeekArray = __spreadArray([], cacheWeekArray, true);
        }
        else if (this._weekStart === 0) {
            this._displayWeekArray = __spreadArray([], this._weekArray, true);
        }
    };
    CalendarWeekComponent.ɵfac = function CalendarWeekComponent_Factory(t) { return new (t || CalendarWeekComponent)(); };
    CalendarWeekComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CalendarWeekComponent, selectors: [["ion-calendar-week"]], inputs: { color: "color", weekArray: "weekArray", weekStart: "weekStart" }, decls: 3, vars: 5, consts: [["no-border-top", ""], [4, "ngFor", "ngForOf"]], template: function CalendarWeekComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ion-toolbar", 0)(1, "ul");
            i0.ɵɵtemplate(2, CalendarWeekComponent_li_2_Template, 2, 1, "li", 1);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵclassMap("week-toolbar " + ctx.color);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMap("week-title " + ctx.color);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx._displayWeekArray);
        } }, dependencies: [i1.NgForOf, i2.IonToolbar], styles: ["[_nghost-%COMP%]   .toolbar-background-md[_ngcontent-%COMP%], [_nghost-%COMP%]   .toolbar-background-ios[_ngcontent-%COMP%] {\n  background: transparent;\n}\n[_nghost-%COMP%]   .week-toolbar[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-bottom: 0;\n  --padding-top: 0;\n}\n[_nghost-%COMP%]   .week-toolbar.primary[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary);\n}\n[_nghost-%COMP%]   .week-toolbar.secondary[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n}\n[_nghost-%COMP%]   .week-toolbar.danger[_ngcontent-%COMP%] {\n  --background: var(--ion-color-danger);\n}\n[_nghost-%COMP%]   .week-toolbar.dark[_ngcontent-%COMP%] {\n  --background: var(--ion-color-dark);\n}\n[_nghost-%COMP%]   .week-toolbar.light[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light);\n}\n[_nghost-%COMP%]   .week-toolbar.transparent[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n[_nghost-%COMP%]   .week-toolbar.toolbar-md[_ngcontent-%COMP%] {\n  min-height: 44px;\n}\n[_nghost-%COMP%]   .week-title[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 44px;\n  width: 100%;\n  padding: 15px 0;\n  color: #fff;\n  font-size: 0.9em;\n}\n[_nghost-%COMP%]   .week-title.light[_ngcontent-%COMP%], [_nghost-%COMP%]   .week-title.transparent[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n[_nghost-%COMP%]   .week-title[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: block;\n  float: left;\n  width: 14%;\n  text-align: center;\n}\n[_nghost-%COMP%]   .week-title[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(7n), [_nghost-%COMP%]   .week-title[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(7n + 1) {\n  width: 15%;\n}"] });
    return CalendarWeekComponent;
}());
exports.CalendarWeekComponent = CalendarWeekComponent;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalendarWeekComponent, [{
        type: core_1.Component,
        args: [{ selector: 'ion-calendar-week', template: "\n    <ion-toolbar [class]=\"'week-toolbar ' + color\" no-border-top>\n      <ul [class]=\"'week-title ' + color\">\n        <li *ngFor=\"let w of _displayWeekArray\">{{ w }}</li>\n      </ul>\n    </ion-toolbar>\n  ", styles: [":host .toolbar-background-md,\n:host .toolbar-background-ios {\n  background: transparent;\n}\n:host .week-toolbar {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-bottom: 0;\n  --padding-top: 0;\n}\n:host .week-toolbar.primary {\n  --background: var(--ion-color-primary);\n}\n:host .week-toolbar.secondary {\n  --background: var(--ion-color-secondary);\n}\n:host .week-toolbar.danger {\n  --background: var(--ion-color-danger);\n}\n:host .week-toolbar.dark {\n  --background: var(--ion-color-dark);\n}\n:host .week-toolbar.light {\n  --background: var(--ion-color-light);\n}\n:host .week-toolbar.transparent {\n  --background: transparent;\n}\n:host .week-toolbar.toolbar-md {\n  min-height: 44px;\n}\n:host .week-title {\n  margin: 0;\n  height: 44px;\n  width: 100%;\n  padding: 15px 0;\n  color: #fff;\n  font-size: 0.9em;\n}\n:host .week-title.light, :host .week-title.transparent {\n  color: #9e9e9e;\n}\n:host .week-title li {\n  list-style-type: none;\n  display: block;\n  float: left;\n  width: 14%;\n  text-align: center;\n}\n:host .week-title li:nth-of-type(7n),\n:host .week-title li:nth-of-type(7n + 1) {\n  width: 15%;\n}"] }]
    }], function () { return []; }, { color: [{
            type: core_1.Input
        }], weekArray: [{
            type: core_1.Input
        }], weekStart: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=calendar-week.component.js.map