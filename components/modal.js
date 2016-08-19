"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./modal/modal-backdrop.component'));
__export(require('./modal/modal-options.class'));
__export(require('./modal/modal.component'));
var modal_module_1 = require('./modal/modal.module');
exports.ModalModule = modal_module_1.ModalModule;
var modal_backdrop_component_2 = require('./modal/modal-backdrop.component');
var modal_component_2 = require('./modal/modal.component');
/** @deprecated */
exports.MODAL_DIRECTIVES = [
    modal_component_2.ModalDirective, modal_backdrop_component_2.ModalBackdropComponent
];
//# sourceMappingURL=modal.js.map