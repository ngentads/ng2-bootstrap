"use strict";
var core_1 = require('@angular/core');
var dropdown_menu_directive_1 = require('./dropdown-menu.directive');
var dropdown_toggle_directive_1 = require('./dropdown-toggle.directive');
var dropdown_directive_1 = require('./dropdown.directive');
var DropdownModule = (function () {
    function DropdownModule() {
    }
    DropdownModule = __decorate([
        core_1.NgModule({
            declarations: [dropdown_directive_1.DropdownDirective, dropdown_menu_directive_1.DropdownMenuDirective, dropdown_toggle_directive_1.DropdownToggleDirective],
            exports: [dropdown_directive_1.DropdownDirective, dropdown_menu_directive_1.DropdownMenuDirective, dropdown_toggle_directive_1.DropdownToggleDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], DropdownModule);
    return DropdownModule;
}());
exports.DropdownModule = DropdownModule;
//# sourceMappingURL=dropdown.module.js.map