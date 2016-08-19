"use strict";
var core_1 = require('@angular/core');
var dropdown_directive_1 = require('./dropdown.directive');
var DropdownMenuDirective = (function () {
    /* tslint:enable:no-unused-variable */
    function DropdownMenuDirective(dropdown, el) {
        /* tslint:disable:no-unused-variable */
        this.addClass = true;
        this.dropdown = dropdown;
        this.el = el;
    }
    DropdownMenuDirective.prototype.ngOnInit = function () {
        this.dropdown.dropDownMenu = this;
    };
    __decorate([
        core_1.HostBinding('class.dropdown-menu'), 
        __metadata('design:type', Boolean)
    ], DropdownMenuDirective.prototype, "addClass", void 0);
    DropdownMenuDirective = __decorate([
        core_1.Directive({
            selector: '[dropdownMenu]',
            exportAs: 'bs-dropdown-menu'
        }),
        __param(0, core_1.Host()), 
        __metadata('design:paramtypes', [dropdown_directive_1.DropdownDirective, core_1.ElementRef])
    ], DropdownMenuDirective);
    return DropdownMenuDirective;
}());
exports.DropdownMenuDirective = DropdownMenuDirective;
//# sourceMappingURL=dropdown-menu.directive.js.map