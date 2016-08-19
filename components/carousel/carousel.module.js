"use strict";
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var carousel_component_1 = require('./carousel.component');
var slide_component_1 = require('./slide.component');
var CarouselModule = (function () {
    function CarouselModule() {
    }
    CarouselModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [slide_component_1.SlideComponent, carousel_component_1.CarouselComponent],
            exports: [slide_component_1.SlideComponent, carousel_component_1.CarouselComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], CarouselModule);
    return CarouselModule;
}());
exports.CarouselModule = CarouselModule;
//# sourceMappingURL=carousel.module.js.map