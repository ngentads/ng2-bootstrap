"use strict";
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var tooltip_container_component_1 = require('./tooltip-container.component');
var tooltip_directive_1 = require('./tooltip.directive');
var components_helper_service_1 = require('../utils/components-helper.service');
var TooltipModule = (function () {
    function TooltipModule() {
    }
    TooltipModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [tooltip_directive_1.TooltipDirective, tooltip_container_component_1.TooltipContainerComponent],
            exports: [tooltip_directive_1.TooltipDirective, tooltip_container_component_1.TooltipContainerComponent],
            providers: [components_helper_service_1.ComponentsHelper],
            entryComponents: [tooltip_container_component_1.TooltipContainerComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TooltipModule);
    return TooltipModule;
}());
exports.TooltipModule = TooltipModule;
//# sourceMappingURL=tooltip.module.js.map