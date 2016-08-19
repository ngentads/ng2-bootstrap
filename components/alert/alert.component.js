"use strict";
var core_1 = require('@angular/core');
var ALERT_TEMPLATE = "\n  <div class=\"alert\" role=\"alert\" [ngClass]=\"classes\" *ngIf=\"!closed\">\n    <button *ngIf=\"dismissible\" type=\"button\" class=\"close\" (click)=\"onClose()\" (touch)=\"onClose()\">\n      <span aria-hidden=\"true\">&times;</span>\n      <span class=\"sr-only\">Close</span>\n    </button>\n    <ng-content></ng-content>\n  </div>\n  ";
// TODO: templateUrl
var AlertComponent = (function () {
    function AlertComponent() {
        this.type = 'warning';
        this.close = new core_1.EventEmitter(false);
        this.classes = [];
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.classes[0] = "alert-" + this.type;
        if (this.dismissible) {
            this.classes[1] = 'alert-dismissible';
        }
        else {
            this.classes.length = 1;
        }
        if (this.dismissOnTimeout) {
            setTimeout(function () { return _this.onClose(); }, this.dismissOnTimeout);
        }
    };
    // todo: mouse event + touch + pointer
    AlertComponent.prototype.onClose = function () {
        this.closed = true;
        this.close.emit(this);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AlertComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], AlertComponent.prototype, "dismissible", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], AlertComponent.prototype, "dismissOnTimeout", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], AlertComponent.prototype, "close", void 0);
    AlertComponent = __decorate([
        core_1.Component({
            selector: 'alert',
            template: ALERT_TEMPLATE
        }), 
        __metadata('design:paramtypes', [])
    ], AlertComponent);
    return AlertComponent;
}());
exports.AlertComponent = AlertComponent;
//# sourceMappingURL=alert.component.js.map