"use strict";
var router_1 = require("@angular/router");
var modal_demo_component_1 = require("./modal-demo.component");
var hello_component_1 = require("./hello.component");
var routes = [
    { path: '', component: modal_demo_component_1.ModalDemoComponent },
    { path: 'hello', component: hello_component_1.HelloComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map