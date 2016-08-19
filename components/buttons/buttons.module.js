"use strict";
var core_1 = require('@angular/core');
var button_checkbox_directive_1 = require('./button-checkbox.directive');
var button_radio_directive_1 = require('./button-radio.directive');
var ButtonsModule = (function () {
    function ButtonsModule() {
    }
    ButtonsModule = __decorate([
        core_1.NgModule({
            declarations: [button_checkbox_directive_1.ButtonCheckboxDirective, button_radio_directive_1.ButtonRadioDirective],
            exports: [button_checkbox_directive_1.ButtonCheckboxDirective, button_radio_directive_1.ButtonRadioDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], ButtonsModule);
    return ButtonsModule;
}());
exports.ButtonsModule = ButtonsModule;
//# sourceMappingURL=buttons.module.js.map