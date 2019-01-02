"use strict";
var testing_1 = require("@angular/core/testing");
function createRoot(type, router) {
    var f = testing_1.TestBed.createComponent(type);
    f.detectChanges();
    if (router) {
        router.initialNavigation();
        advance(f);
    }
    return f;
}
exports.createRoot = createRoot;
function advance(fixture, millis) {
    testing_1.tick(millis);
    fixture.detectChanges();
}
exports.advance = advance;
function ticks() {
    var millises = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        millises[_i] = arguments[_i];
    }
    millises.forEach(function (m) { return testing_1.tick(m); });
}
exports.ticks = ticks;
//# sourceMappingURL=common.js.map