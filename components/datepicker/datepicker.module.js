"use strict";
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var datepicker_inner_component_1 = require('./datepicker-inner.component');
// import {DatePickerPopup} from './datepicker-popup';
var datepicker_popup_component_1 = require('./datepicker-popup.component');
var datepicker_component_1 = require('./datepicker.component');
var daypicker_component_1 = require('./daypicker.component');
var monthpicker_component_1 = require('./monthpicker.component');
var yearpicker_component_1 = require('./yearpicker.component');
var components_helper_service_1 = require('../utils/components-helper.service');
var DatepickerModule = (function () {
    function DatepickerModule() {
    }
    DatepickerModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            declarations: [datepicker_popup_component_1.DatePickerPopupDirective, datepicker_component_1.DatePickerComponent, datepicker_inner_component_1.DatePickerInnerComponent, daypicker_component_1.DayPickerComponent, monthpicker_component_1.MonthPickerComponent, yearpicker_component_1.YearPickerComponent],
            exports: [datepicker_popup_component_1.DatePickerPopupDirective, datepicker_component_1.DatePickerComponent, datepicker_inner_component_1.DatePickerInnerComponent, daypicker_component_1.DayPickerComponent, monthpicker_component_1.MonthPickerComponent, yearpicker_component_1.YearPickerComponent],
            providers: [components_helper_service_1.ComponentsHelper]
        }), 
        __metadata('design:paramtypes', [])
    ], DatepickerModule);
    return DatepickerModule;
}());
exports.DatepickerModule = DatepickerModule;
//# sourceMappingURL=datepicker.module.js.map