"use strict";
var core_1 = require('@angular/core');
var lang_1 = require('@angular/core/src/facade/lang');
var platform_browser_1 = require('@angular/platform-browser');
/**
 * Components helper class to easily work with
 * allows to:
 * - get application root view container ref
 */
var ComponentsHelper = (function () {
    function ComponentsHelper(applicationRef, componentFactoryResolver, injector) {
        this.applicationRef = applicationRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
    }
    ComponentsHelper.prototype.getDocument = function () {
        return this.injector.get(platform_browser_1.DOCUMENT);
    };
    /**
     * This is a name conventional class to get application root view component ref
     * to made this method working you need to add:
     * ```typescript
     *  @Component({
     *   selector: 'my-app',
     *   ...
     *   })
     *  export class MyApp {
     *    constructor(viewContainerRef: ViewContainerRef) {
     *        // A Default view container ref, usually the app root container ref.
     *        // Has to be set manually until we can find a way to get it automatically.
     *        this.viewContainerRef = viewContainerRef;
     *      }
     *  }
     * ```
     * @returns {ViewContainerRef} - application root view component ref
     */
    ComponentsHelper.prototype.getRootViewContainerRef = function (injector) {
        // The only way for now (by @mhevery)
        // https://github.com/angular/angular/issues/6446#issuecomment-173459525
        // this is a class of application bootstrap component (like my-app)
        var classOfRootComponent = this.applicationRef.componentTypes[0];
        // this is an instance of application bootstrap component
        var appInstance = injector.get(classOfRootComponent);
        return appInstance.viewContainerRef;
    };
    /**
     * Creates an instance of a Component and attaches it to the View Container found at the
     * `location` specified as {@link ViewContainerRef}.
     *
     * You can optionally provide `providers` to configure the {@link Injector} provisioned for this
     * Component Instance.
     *
     * Returns {@link ComponentRef} representing the newly created Component.
     * @param ComponentClass - @Component class
     * @param location - reference to the location
     * @param providers - optional array of providers
     * @returns {ComponentRef<T>} - returns ComponentRef<T>
     */
    ComponentsHelper.prototype.appendNextToLocation = function (ComponentClass, location, providers) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(ComponentClass);
        var parentInjector = location.parentInjector;
        var childInjector = lang_1.isPresent(providers) && providers.length > 0 ?
            core_1.ReflectiveInjector.fromResolvedProviders(providers, parentInjector) : parentInjector;
        return location.createComponent(componentFactory, location.length, childInjector);
    };
    /**
     * Helper methods to add ComponentClass(like modal backdrop) with options
     * of type ComponentOptionsClass to element next to application root
     * or next to provided instance of view container
     * @param ComponentClass - @Component class
     * @param ComponentOptionsClass - options class
     * @param options - instance of options
     * @param contextInjector - injector to resolve root view container (any injector except root injector will fit)
     * @returns {ComponentRef<T>} - returns ComponentRef<T>
     */
    ComponentsHelper.prototype.appendNextToRoot = function (ComponentClass, ComponentOptionsClass, options, contextInjector) {
        var location = this.getRootViewContainerRef(contextInjector);
        var providers = core_1.ReflectiveInjector.resolve([
            { provide: ComponentOptionsClass, useValue: options }
        ]);
        return this.appendNextToLocation(ComponentClass, location, providers);
    };
    ComponentsHelper = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.ApplicationRef, core_1.ComponentFactoryResolver, core_1.Injector])
    ], ComponentsHelper);
    return ComponentsHelper;
}());
exports.ComponentsHelper = ComponentsHelper;
//# sourceMappingURL=components-helper.service.js.map