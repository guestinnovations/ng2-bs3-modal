"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var modal_1 = require("./components/modal");
var modal_header_1 = require("./components/modal-header");
var modal_body_1 = require("./components/modal-body");
var modal_footer_1 = require("./components/modal-footer");
var autofocus_1 = require("./directives/autofocus");
__export(require("./components/modal"));
__export(require("./components/modal-header"));
__export(require("./components/modal-body"));
__export(require("./components/modal-footer"));
__export(require("./components/modal-instance"));
var Ng2Bs3ModalModule = (function () {
    function Ng2Bs3ModalModule() {
    }
    return Ng2Bs3ModalModule;
}());
Ng2Bs3ModalModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            modal_1.ModalComponent,
            modal_header_1.ModalHeaderComponent,
            modal_body_1.ModalBodyComponent,
            modal_footer_1.ModalFooterComponent,
            autofocus_1.AutofocusDirective
        ],
        exports: [
            modal_1.ModalComponent,
            modal_header_1.ModalHeaderComponent,
            modal_body_1.ModalBodyComponent,
            modal_footer_1.ModalFooterComponent,
            autofocus_1.AutofocusDirective
        ]
    }),
    __metadata("design:paramtypes", [])
], Ng2Bs3ModalModule);
exports.Ng2Bs3ModalModule = Ng2Bs3ModalModule;
//# sourceMappingURL=ng2-bs3-modal.js.map