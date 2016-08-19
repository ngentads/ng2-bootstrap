"use strict";
var core_1 = require('@angular/core');
var lang_1 = require('@angular/core/src/facade/lang');
var dropdown_directive_1 = require('./dropdown.directive');
/* tslint:disable */
var MouseEvent = lang_1.global.MouseEvent;
/* tslint:enable */
var DropdownToggleDirective = (function () {
    function DropdownToggleDirective(dropdown, el) {
        this.isDisabled = false;
        this.addToggleClass = false;
        this.addClass = true;
        this.dropdown = dropdown;
        this.el = el;
    }
    DropdownToggleDirective.prototype.ngOnInit = function () {
        this.dropdown.dropDownToggle = this;
    };
    Object.defineProperty(DropdownToggleDirective.prototype, "isOpen", {
        get: function () {
            return this.dropdown.isOpen;
        },
        enumerable: true,
        configurable: true
    });
    DropdownToggleDirective.prototype.toggleDropdown = function (event) {
        event.stopPropagation();
        if (!this.isDisabled) {
            this.dropdown.toggle();
        }
        return false;
    };
    __decorate([
        core_1.HostBinding('class.disabled'),
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DropdownToggleDirective.prototype, "isDisabled", void 0);
    __decorate([
        core_1.HostBinding('class.dropdown-toggle'),
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DropdownToggleDirective.prototype, "addToggleClass", void 0);
    __decorate([
        core_1.HostBinding('attr.aria-haspopup'), 
        __metadata('design:type', Boolean)
    ], DropdownToggleDirective.prototype, "addClass", void 0);
    __decorate([
        core_1.HostBinding('attr.aria-expanded'), 
        __metadata('design:type', Boolean)
    ], DropdownToggleDirective.prototype, "isOpen", null);
    __decorate([
        core_1.HostListener('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', Boolean)
    ], DropdownToggleDirective.prototype, "toggleDropdown", null);
    DropdownToggleDirective = __decorate([
        core_1.Directive({
            selector: '[dropdownToggle]',
            exportAs: 'bs-dropdown-toggle'
        }),
        __param(0, core_1.Host()), 
        __metadata('design:paramtypes', [dropdown_directive_1.DropdownDirective, core_1.ElementRef])
    ], DropdownToggleDirective);
    return DropdownToggleDirective;
}());
exports.DropdownToggleDirective = DropdownToggleDirective;
//# sourceMappingURL=dropdown-toggle.directive.js.map