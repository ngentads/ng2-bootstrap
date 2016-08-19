"use strict";
var core_1 = require('@angular/core');
var tab_directive_1 = require('./tab.directive');
var TabHeadingDirective = (function () {
    function TabHeadingDirective(templateRef, tab) {
        tab.headingRef = templateRef;
    }
    TabHeadingDirective = __decorate([
        core_1.Directive({ selector: '[tabHeading]' }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, tab_directive_1.TabDirective])
    ], TabHeadingDirective);
    return TabHeadingDirective;
}());
exports.TabHeadingDirective = TabHeadingDirective;
//# sourceMappingURL=tab-heading.directive.js.map