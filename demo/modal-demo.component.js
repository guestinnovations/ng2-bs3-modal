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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng2_bs3_modal_1 = require("../src/ng2-bs3-modal/ng2-bs3-modal");
var ModalDemoComponent = (function () {
    function ModalDemoComponent(router) {
        this.router = router;
        this.items = ['item1', 'item2', 'item3'];
        this.model = new Person();
        this.index = 0;
        this.backdropOptions = [true, false, 'static'];
        this.cssClass = '';
        this.animation = true;
        this.keyboard = true;
        this.backdrop = true;
        this.css = false;
    }
    ModalDemoComponent.prototype.closed = function () {
        this.output = '(closed) ' + this.selected;
    };
    ModalDemoComponent.prototype.dismissed = function () {
        this.output = '(dismissed)';
    };
    ModalDemoComponent.prototype.opened = function () {
        this.output = '(opened)';
    };
    ModalDemoComponent.prototype.navigate = function () {
        this.router.navigateByUrl('/hello');
    };
    ModalDemoComponent.prototype.open = function () {
        this.modal.open();
    };
    return ModalDemoComponent;
}());
__decorate([
    core_1.ViewChild('modal'),
    __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
], ModalDemoComponent.prototype, "modal", void 0);
ModalDemoComponent = __decorate([
    core_1.Component({
        selector: 'modal-demo-component',
        templateUrl: 'demo/modal-demo.component.html',
        styles: [
            ".ng-valid[required] {\n            border-left: 5px solid #5cb85c; /* green */\n        }",
            ".ng-invalid:not(.ng-untouched):not(form) {\n            border-left: 5px solid #d9534f; /* red */\n        }",
            ".red-text {\n            color: #d9534f !important; /* red */\n        }"
        ],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ModalDemoComponent);
exports.ModalDemoComponent = ModalDemoComponent;
var Person = (function () {
    function Person() {
    }
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=modal-demo.component.js.map