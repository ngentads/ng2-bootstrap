"use strict";
var core_1 = require('@angular/core');
// todo: support template url
var AccordionComponent = (function () {
    function AccordionComponent() {
        /* tslint:disable:no-unused-variable */
        this.addClass = true;
        /* tslint:enable:no-unused-variable */
        this.groups = [];
    }
    AccordionComponent.prototype.closeOtherPanels = function (openGroup) {
        if (!this.closeOthers) {
            return;
        }
        this.groups.forEach(function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    };
    AccordionComponent.prototype.addGroup = function (group) {
        this.groups.push(group);
    };
    AccordionComponent.prototype.removeGroup = function (group) {
        var index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], AccordionComponent.prototype, "closeOthers", void 0);
    __decorate([
        core_1.HostBinding('class.panel-group'), 
        __metadata('design:type', Boolean)
    ], AccordionComponent.prototype, "addClass", void 0);
    AccordionComponent = __decorate([
        core_1.Component({
            selector: 'accordion',
            template: "<ng-content></ng-content>"
        }), 
        __metadata('design:paramtypes', [])
    ], AccordionComponent);
    return AccordionComponent;
}());
exports.AccordionComponent = AccordionComponent;
//# sourceMappingURL=accordion.component.js.map