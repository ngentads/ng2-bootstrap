"use strict";
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var alert_component_1 = require('./alert.component');
var AlertModule = (function () {
    function AlertModule() {
    }
    AlertModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [alert_component_1.AlertComponent],
            exports: [alert_component_1.AlertComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AlertModule);
    return AlertModule;
}());
exports.AlertModule = AlertModule;
//# sourceMappingURL=alert.module.js.map