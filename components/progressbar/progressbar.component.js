"use strict";
var core_1 = require('@angular/core');
var ProgressbarComponent = (function () {
    function ProgressbarComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ProgressbarComponent.prototype, "animate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ProgressbarComponent.prototype, "max", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ProgressbarComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ProgressbarComponent.prototype, "value", void 0);
    ProgressbarComponent = __decorate([
        core_1.Component({
            selector: 'progressbar',
            template: "\n    <div progress [animate]=\"animate\" [max]=\"max\">\n      <bar [type]=\"type\" [value]=\"value\">\n          <ng-content></ng-content>\n      </bar>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ProgressbarComponent);
    return ProgressbarComponent;
}());
exports.ProgressbarComponent = ProgressbarComponent;
//# sourceMappingURL=progressbar.component.js.map