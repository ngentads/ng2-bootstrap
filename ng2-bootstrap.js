"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var accordion_1 = require('./components/accordion');
var alert_1 = require('./components/alert');
var buttons_1 = require('./components/buttons');
var carousel_1 = require('./components/carousel');
var collapse_1 = require('./components/collapse');
var datepicker_1 = require('./components/datepicker');
var dropdown_1 = require('./components/dropdown');
var modal_1 = require('./components/modal');
var pagination_1 = require('./components/pagination');
var progressbar_1 = require('./components/progressbar');
var rating_1 = require('./components/rating');
var tabs_1 = require('./components/tabs');
var timepicker_1 = require('./components/timepicker');
var tooltip_1 = require('./components/tooltip');
var typeahead_1 = require('./components/typeahead');
var components_helper_service_1 = require('./components/utils/components-helper.service');
__export(require('./components/accordion'));
__export(require('./components/alert'));
__export(require('./components/buttons'));
__export(require('./components/carousel'));
__export(require('./components/collapse'));
__export(require('./components/datepicker'));
__export(require('./components/modal'));
__export(require('./components/dropdown'));
__export(require('./components/pagination'));
__export(require('./components/progressbar'));
__export(require('./components/rating'));
__export(require('./components/tabs'));
__export(require('./components/timepicker'));
__export(require('./components/tooltip'));
__export(require('./components/typeahead'));
__export(require('./components/position'));
__export(require('./components/common'));
__export(require('./components/ng2-bootstrap-config'));
var accordion_module_1 = require('./components/accordion/accordion.module');
exports.AccordionModule = accordion_module_1.AccordionModule;
var alert_module_1 = require('./components/alert/alert.module');
exports.AlertModule = alert_module_1.AlertModule;
var buttons_module_1 = require('./components/buttons/buttons.module');
exports.ButtonsModule = buttons_module_1.ButtonsModule;
var carousel_module_1 = require('./components/carousel/carousel.module');
exports.CarouselModule = carousel_module_1.CarouselModule;
var collapse_module_1 = require('./components/collapse/collapse.module');
exports.CollapseModule = collapse_module_1.CollapseModule;
var datepicker_module_1 = require('./components/datepicker/datepicker.module');
exports.DatepickerModule = datepicker_module_1.DatepickerModule;
var dropdown_module_1 = require('./components/dropdown/dropdown.module');
exports.DropdownModule = dropdown_module_1.DropdownModule;
var modal_module_1 = require('./components/modal/modal.module');
exports.ModalModule = modal_module_1.ModalModule;
var pagination_module_1 = require('./components/pagination/pagination.module');
exports.PaginationModule = pagination_module_1.PaginationModule;
var progressbar_module_1 = require('./components/progressbar/progressbar.module');
exports.ProgressbarModule = progressbar_module_1.ProgressbarModule;
var rating_module_1 = require('./components/rating/rating.module');
exports.RatingModule = rating_module_1.RatingModule;
var tabs_module_1 = require('./components/tabs/tabs.module');
exports.TabsModule = tabs_module_1.TabsModule;
var timepicker_module_1 = require('./components/timepicker/timepicker.module');
exports.TimepickerModule = timepicker_module_1.TimepickerModule;
var tooltip_module_1 = require('./components/tooltip/tooltip.module');
exports.TooltipModule = tooltip_module_1.TooltipModule;
var typeahead_module_1 = require('./components/typeahead/typeahead.module');
exports.TypeaheadModule = typeahead_module_1.TypeaheadModule;
var components_helper_service_2 = require('./components/utils/components-helper.service');
exports.ComponentsHelper = components_helper_service_2.ComponentsHelper;
/** @deprecated */
exports.BS_VIEW_PROVIDERS = [{ provide: components_helper_service_1.ComponentsHelper, useClass: components_helper_service_1.ComponentsHelper }];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    directives: [
        alert_1.AlertComponent,
        accordion_1.ACCORDION_DIRECTIVES,
        buttons_1.BUTTON_DIRECTIVES,
        carousel_1.CAROUSEL_DIRECTIVES,
        collapse_1.CollapseDirective,
        datepicker_1.DATEPICKER_DIRECTIVES,
        dropdown_1.DROPDOWN_DIRECTIVES,
        modal_1.MODAL_DIRECTIVES,
        pagination_1.PAGINATION_DIRECTIVES,
        progressbar_1.PROGRESSBAR_DIRECTIVES,
        rating_1.RatingComponent,
        tabs_1.TAB_DIRECTIVES,
        timepicker_1.TimepickerComponent,
        tooltip_1.TOOLTIP_DIRECTIVES,
        typeahead_1.TYPEAHEAD_DIRECTIVES
    ],
    providers: [
        components_helper_service_1.ComponentsHelper
    ]
};
var index_1 = require('./components/index');
exports.Ng2BootstrapModule = index_1.Ng2BootstrapModule;
//# sourceMappingURL=ng2-bootstrap.js.map