"use strict";
var core_1 = require('@angular/core');
var NgTranscludeDirective = (function () {
    function NgTranscludeDirective(_viewRef) {
        this.viewRef = _viewRef;
    }
    Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
        get: function () {
            return this._ngTransclude;
        },
        set: function (templateRef) {
            this._ngTransclude = templateRef;
            if (templateRef) {
                this.viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgTranscludeDirective = __decorate([
        core_1.Directive({
            selector: '[ngTransclude]',
            properties: ['ngTransclude']
        }),
        __param(0, core_1.Inject(core_1.ViewContainerRef)), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], NgTranscludeDirective);
    return NgTranscludeDirective;
}());
exports.NgTranscludeDirective = NgTranscludeDirective;
//# sourceMappingURL=common.js.map