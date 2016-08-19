"use strict";
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var timepicker_component_1 = require('./timepicker.component');
var TimepickerModule = (function () {
    function TimepickerModule() {
    }
    TimepickerModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            declarations: [timepicker_component_1.TimepickerComponent],
            exports: [timepicker_component_1.TimepickerComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TimepickerModule);
    return TimepickerModule;
}());
exports.TimepickerModule = TimepickerModule;
//# sourceMappingURL=timepicker.module.js.map