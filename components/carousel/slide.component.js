"use strict";
var core_1 = require('@angular/core');
var carousel_component_1 = require('./carousel.component');
var SlideComponent = (function () {
    function SlideComponent(carousel) {
        this.addClass = true;
        this.carousel = carousel;
    }
    SlideComponent.prototype.ngOnInit = function () {
        this.carousel.addSlide(this);
    };
    SlideComponent.prototype.ngOnDestroy = function () {
        this.carousel.removeSlide(this);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SlideComponent.prototype, "index", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SlideComponent.prototype, "direction", void 0);
    __decorate([
        core_1.HostBinding('class.active'),
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SlideComponent.prototype, "active", void 0);
    __decorate([
        core_1.HostBinding('class.item'),
        core_1.HostBinding('class.carousel-item'), 
        __metadata('design:type', Boolean)
    ], SlideComponent.prototype, "addClass", void 0);
    SlideComponent = __decorate([
        core_1.Component({
            selector: 'slide',
            template: "\n    <div [class.active]=\"active\" class=\"item text-center\">\n      <ng-content></ng-content>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [carousel_component_1.CarouselComponent])
    ], SlideComponent);
    return SlideComponent;
}());
exports.SlideComponent = SlideComponent;
//# sourceMappingURL=slide.component.js.map