"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthPickerComponent = void 0;
var core_1 = require("@angular/core");
var calendar_model_1 = require("../calendar.model");
var config_1 = require("../config");
var i0 = require("@angular/core");
var i1 = require("@angular/common");
function MonthPickerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1)(1, "button", 2);
    i0.ɵɵlistener("click", function MonthPickerComponent_div_1_Template_button_click_1_listener() { var restoredCtx = i0.ɵɵrestoreView(_r4); var i_r2 = restoredCtx.index; var ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3._onSelect(i_r2)); });
    i0.ɵɵpipe(2, "date");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    var i_r2 = ctx.index;
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("this-month", i_r2 === ctx_r0._thisMonth.getMonth() && ctx_r0.month.original.year === ctx_r0._thisMonth.getFullYear());
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("aria-label", i0.ɵɵpipeBind2(2, 4, ctx_r0.getDate(i_r2), ctx_r0.MONTH_FORMAT));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1);
} }
var MonthPickerComponent = /** @class */ (function () {
    function MonthPickerComponent() {
        this.color = config_1.defaults.COLOR;
        this.select = new core_1.EventEmitter();
        this._thisMonth = new Date();
        this._monthFormat = config_1.defaults.MONTH_FORMAT;
        this.MONTH_FORMAT = 'MMMM';
    }
    Object.defineProperty(MonthPickerComponent.prototype, "monthFormat", {
        get: function () {
            return this._monthFormat;
        },
        set: function (value) {
            if (Array.isArray(value) && value.length === 12) {
                this._monthFormat = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    MonthPickerComponent.prototype._onSelect = function (month) {
        this.select.emit(month);
    };
    MonthPickerComponent.prototype.getDate = function (month) {
        return new Date(this._thisMonth.getFullYear(), month, 1);
    };
    MonthPickerComponent.ɵfac = function MonthPickerComponent_Factory(t) { return new (t || MonthPickerComponent)(); };
    MonthPickerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MonthPickerComponent, selectors: [["ion-calendar-month-picker"]], inputs: { month: "month", color: "color", monthFormat: "monthFormat" }, outputs: { select: "select" }, decls: 2, vars: 3, consts: [["class", "month-packer-item", 3, "this-month", 4, "ngFor", "ngForOf"], [1, "month-packer-item"], ["type", "button", 3, "click"]], template: function MonthPickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, MonthPickerComponent_div_1_Template, 4, 7, "div", 0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMap("month-picker " + ctx.color);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx._monthFormat);
        } }, dependencies: [i1.NgForOf, i1.DatePipe], styles: ["[_nghost-%COMP%]   .month-picker[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  display: inline-block;\n  width: 100%;\n}\n[_nghost-%COMP%]   .month-packer-item[_ngcontent-%COMP%] {\n  width: 25%;\n  box-sizing: border-box;\n  float: left;\n  height: 50px;\n  padding: 5px;\n}\n[_nghost-%COMP%]   .month-packer-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 32px;\n  width: 100%;\n  height: 100%;\n  font-size: 0.9em;\n  background-color: transparent;\n}\n[_nghost-%COMP%]   .month-picker.primary[_ngcontent-%COMP%]   .month-packer-item.this-month[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-primary);\n}\n[_nghost-%COMP%]   .month-picker.primary[_ngcontent-%COMP%]   .month-packer-item.active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-primary);\n  color: #fff;\n}\n[_nghost-%COMP%]   .month-picker.secondary[_ngcontent-%COMP%]   .month-packer-item.this-month[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-secondary);\n}\n[_nghost-%COMP%]   .month-picker.secondary[_ngcontent-%COMP%]   .month-packer-item.active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-secondary);\n  color: #fff;\n}\n[_nghost-%COMP%]   .month-picker.danger[_ngcontent-%COMP%]   .month-packer-item.this-month[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-danger);\n}\n[_nghost-%COMP%]   .month-picker.danger[_ngcontent-%COMP%]   .month-packer-item.active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-danger);\n  color: #fff;\n}\n[_nghost-%COMP%]   .month-picker.dark[_ngcontent-%COMP%]   .month-packer-item.this-month[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-dark);\n}\n[_nghost-%COMP%]   .month-picker.dark[_ngcontent-%COMP%]   .month-packer-item.active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-dark);\n  color: #fff;\n}\n[_nghost-%COMP%]   .month-picker.light[_ngcontent-%COMP%]   .month-packer-item.this-month[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-light);\n}\n[_nghost-%COMP%]   .month-picker.light[_ngcontent-%COMP%]   .month-packer-item.active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light);\n  color: #9e9e9e;\n}\n[_nghost-%COMP%]   .month-picker.transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n[_nghost-%COMP%]   .month-picker.transparent[_ngcontent-%COMP%]   .month-packer-item.this-month[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-light);\n}\n[_nghost-%COMP%]   .month-picker.transparent[_ngcontent-%COMP%]   .month-packer-item.active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light);\n  color: #9e9e9e;\n}\n[_nghost-%COMP%]   .month-picker.cal-color[_ngcontent-%COMP%]   .month-packer-item.this-month[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid;\n}\n[_nghost-%COMP%]   .month-picker.cal-color[_ngcontent-%COMP%]   .month-packer-item.active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n}"] });
    return MonthPickerComponent;
}());
exports.MonthPickerComponent = MonthPickerComponent;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MonthPickerComponent, [{
        type: core_1.Component,
        args: [{ selector: 'ion-calendar-month-picker', template: "\n    <div [class]=\"'month-picker ' + color\">\n      <div class=\"month-packer-item\"\n           [class.this-month]=\" i === _thisMonth.getMonth() && month.original.year === _thisMonth.getFullYear()\"\n           *ngFor=\"let item of _monthFormat; let i = index\">\n        <button type=\"button\" (click)=\"_onSelect(i)\" [attr.aria-label]=\"getDate(i) | date:MONTH_FORMAT\">{{ item }}</button>\n      </div>\n    </div>\n  ", styles: [":host .month-picker {\n  margin: 20px 0;\n  display: inline-block;\n  width: 100%;\n}\n:host .month-packer-item {\n  width: 25%;\n  box-sizing: border-box;\n  float: left;\n  height: 50px;\n  padding: 5px;\n}\n:host .month-packer-item button {\n  border-radius: 32px;\n  width: 100%;\n  height: 100%;\n  font-size: 0.9em;\n  background-color: transparent;\n}\n:host .month-picker.primary .month-packer-item.this-month button {\n  border: 1px solid var(--ion-color-primary);\n}\n:host .month-picker.primary .month-packer-item.active button {\n  background-color: var(--ion-color-primary);\n  color: #fff;\n}\n:host .month-picker.secondary .month-packer-item.this-month button {\n  border: 1px solid var(--ion-color-secondary);\n}\n:host .month-picker.secondary .month-packer-item.active button {\n  background-color: var(--ion-color-secondary);\n  color: #fff;\n}\n:host .month-picker.danger .month-packer-item.this-month button {\n  border: 1px solid var(--ion-color-danger);\n}\n:host .month-picker.danger .month-packer-item.active button {\n  background-color: var(--ion-color-danger);\n  color: #fff;\n}\n:host .month-picker.dark .month-packer-item.this-month button {\n  border: 1px solid var(--ion-color-dark);\n}\n:host .month-picker.dark .month-packer-item.active button {\n  background-color: var(--ion-color-dark);\n  color: #fff;\n}\n:host .month-picker.light .month-packer-item.this-month button {\n  border: 1px solid var(--ion-color-light);\n}\n:host .month-picker.light .month-packer-item.active button {\n  background-color: var(--ion-color-light);\n  color: #9e9e9e;\n}\n:host .month-picker.transparent {\n  background-color: transparent;\n}\n:host .month-picker.transparent .month-packer-item.this-month button {\n  border: 1px solid var(--ion-color-light);\n}\n:host .month-picker.transparent .month-packer-item.active button {\n  background-color: var(--ion-color-light);\n  color: #9e9e9e;\n}\n:host .month-picker.cal-color .month-packer-item.this-month button {\n  border: 1px solid;\n}\n:host .month-picker.cal-color .month-packer-item.active button {\n  color: #fff;\n}"] }]
    }], function () { return []; }, { month: [{
            type: core_1.Input
        }], color: [{
            type: core_1.Input
        }], select: [{
            type: core_1.Output
        }], monthFormat: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=month-picker.component.js.map