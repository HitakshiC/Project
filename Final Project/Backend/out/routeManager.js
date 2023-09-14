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
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const identifiers_1 = require("./config/identifiers");
const constants_1 = require("./util/constants");
const ParentController_1 = require("./controller/ParentController");
// import { InstituteController } from "./controller/InstituteController";
// import { TeacherController } from "./controller/TeacherController";
// import { StudentController } from "./controller/StudentController";
const EmailController_1 = require("./controller/EmailController");
let RouteManager = class RouteManager {
    constructor() {
        // @inject(Identifiers.InstituteController)
        // private InstituteController:InstituteController;
        // @inject(Identifiers.TeacherController)
        // private TeacherController:TeacherController;
        // @inject(Identifiers.StudentController)
        // private StudentController:StudentController;
        this.configure = (express) => {
            console.log('router function');
            express.use(constants_1.default.resource_URL, this.ParentController.router);
            // express.use(Constants.resource_URL, this.InstituteController.router);
            // express.use(Constants.resource_URL, this.TeacherController.router);
            // express.use(Constants.resource_URL, this.StudentController.router);
            express.use(constants_1.default.resource_URL, this.EmailController.router);
        };
    }
};
__decorate([
    inversify_1.inject(identifiers_1.default.ParentController),
    __metadata("design:type", ParentController_1.ParentController)
], RouteManager.prototype, "ParentController", void 0);
__decorate([
    inversify_1.inject(identifiers_1.default.EmailController),
    __metadata("design:type", EmailController_1.EmailController)
], RouteManager.prototype, "EmailController", void 0);
RouteManager = __decorate([
    inversify_1.injectable()
], RouteManager);
exports.RouteManager = RouteManager;
//# sourceMappingURL=routeManager.js.map