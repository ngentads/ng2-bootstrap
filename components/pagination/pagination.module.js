"use strict";
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var pager_component_1 = require('./pager.component');
var pagination_component_1 = require('./pagination.component');
var PaginationModule = (function () {
    function PaginationModule() {
    }
    PaginationModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [pagination_component_1.PaginationComponent, pager_component_1.PagerComponent],
            exports: [pagination_component_1.PaginationComponent, pager_component_1.PagerComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationModule);
    return PaginationModule;
}());
exports.PaginationModule = PaginationModule;
//# sourceMappingURL=pagination.module.js.map