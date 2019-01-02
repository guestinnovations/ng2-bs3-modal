"use strict";
require("rxjs/add/operator/map");
require("rxjs/add/observable/fromEvent");
var ModalInstance = (function () {
    function ModalInstance(element) {
        this.element = element;
        this.suffix = '.ng2-bs3-modal';
        this.shownEventName = 'shown.bs.modal' + this.suffix;
        this.hiddenEventName = 'hidden.bs.modal' + this.suffix;
        this.visible = false;
        this.init();
    }
    ModalInstance.prototype.open = function () {
        return this.show();
    };
    ModalInstance.prototype.close = function () {
        this.result = ModalResult.Close;
        return this.hide();
    };
    ModalInstance.prototype.dismiss = function () {
        this.result = ModalResult.Dismiss;
        return this.hide();
    };
    ModalInstance.prototype.destroy = function () {
        return this.hide().then(function () {
            // ils nod
        });
    };
    ModalInstance.prototype.show = function () {
        var promise = toPromise(this.shown);
        this.resetData();
        // this.$modal.modal();
        return promise;
    };
    ModalInstance.prototype.hide = function () {
        // if (this.$modal && this.visible) {
        //     let promise = toPromise(this.hidden);
        //     // this.$modal.modal('hide');
        //     return promise;
        // }
        return Promise.resolve(this.result);
    };
    ModalInstance.prototype.init = function () {
        // this.$modal = jQuery(this.element.nativeElement);
        // this.$modal.appendTo('body');
        // this.shown = Observable.fromEvent(this.$modal, this.shownEventName)
        //     .map(() => {
        //         this.visible = true;
        //     });
        // this.hidden = Observable.fromEvent(this.$modal, this.hiddenEventName)
        //     .map(() => {
        //         let result = (!this.result || this.result === ModalResult.None)
        //             ? ModalResult.Dismiss : this.result;
        //         this.result = ModalResult.None;
        //         this.visible = false;
        //         return result;
        //     });
    };
    ModalInstance.prototype.resetData = function () {
        // this.$modal.removeData();
        // this.$modal.data('backdrop', booleanOrValue(this.$modal.attr('data-backdrop')));
        // this.$modal.data('keyboard', booleanOrValue(this.$modal.attr('data-keyboard')));
    };
    return ModalInstance;
}());
exports.ModalInstance = ModalInstance;
function booleanOrValue(value) {
    if (value === 'true')
        return true;
    else if (value === 'false')
        return false;
    return value;
}
function toPromise(observable) {
    return new Promise(function (resolve, reject) {
        observable.subscribe(function (next) {
            resolve(next);
        });
    });
}
var ModalResult;
(function (ModalResult) {
    ModalResult[ModalResult["None"] = 0] = "None";
    ModalResult[ModalResult["Close"] = 1] = "Close";
    ModalResult[ModalResult["Dismiss"] = 2] = "Dismiss";
})(ModalResult = exports.ModalResult || (exports.ModalResult = {}));
//# sourceMappingURL=modal-instance.js.map