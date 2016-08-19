"use strict";
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var typeahead_container_component_1 = require('./typeahead-container.component');
var typeahead_directive_1 = require('./typeahead.directive');
var components_helper_service_1 = require('../utils/components-helper.service');
var TypeaheadModule = (function () {
    function TypeaheadModule() {
    }
    TypeaheadModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [typeahead_directive_1.TypeaheadDirective, typeahead_container_component_1.TypeaheadContainerComponent],
            exports: [typeahead_directive_1.TypeaheadDirective, typeahead_container_component_1.TypeaheadContainerComponent],
            providers: [components_helper_service_1.ComponentsHelper],
            entryComponents: [typeahead_container_component_1.TypeaheadContainerComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TypeaheadModule);
    return TypeaheadModule;
}());
exports.TypeaheadModule = TypeaheadModule;
//# sourceMappingURL=typeahead.module.js.map