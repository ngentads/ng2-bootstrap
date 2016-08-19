"use strict";
var core_1 = require('@angular/core');
var modal_backdrop_component_1 = require('./modal-backdrop.component');
var modal_component_1 = require('./modal.component');
var components_helper_service_1 = require('../utils/components-helper.service');
var ModalModule = (function () {
    function ModalModule() {
    }
    ModalModule = __decorate([
        core_1.NgModule({
            declarations: [modal_backdrop_component_1.ModalBackdropComponent, modal_component_1.ModalDirective],
            exports: [modal_backdrop_component_1.ModalBackdropComponent, modal_component_1.ModalDirective],
            entryComponents: [modal_backdrop_component_1.ModalBackdropComponent],
            providers: [components_helper_service_1.ComponentsHelper]
        }), 
        __metadata('design:paramtypes', [])
    ], ModalModule);
    return ModalModule;
}());
exports.ModalModule = ModalModule;
//# sourceMappingURL=modal.module.js.map