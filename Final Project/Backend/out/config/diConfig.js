"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const expressServer_1 = require("../expressServer");
const identifiers_1 = require("./identifiers");
const routeManager_1 = require("../routeManager");
const configParams_1 = require("./configParams");
const dbManager_1 = require("../db/dbManager");
const ParentController_1 = require("../controller/ParentController");
const EmailController_1 = require("../controller/EmailController");
const ParentDbManager_1 = require("../db/ParentDbManager");
const parentService_1 = require("../service/parentService");
let diContainer = new inversify_1.Container({ defaultScope: "Singleton" });
diContainer.bind(identifiers_1.default.ExpressServer).to(expressServer_1.ExpressServer);
diContainer.bind(identifiers_1.default.RouteManager).to(routeManager_1.RouteManager);
diContainer.bind(identifiers_1.default.ConfigParams).to(configParams_1.ConfigParams);
//DB manager
diContainer.bind(identifiers_1.default.DbManager).to(dbManager_1.DbManager);
//  AdminloginController  IAdminloginService   AdminloginDbManager
diContainer
    .bind(identifiers_1.default.ParentController)
    .to(ParentController_1.ParentController);
// diContainer
//   .bind<InstituteController>(Identifiers.InstituteController)
//   .to(InstituteController);
// diContainer
//   .bind<StudentController>(Identifiers.StudentController)
//   .to(StudentController);
// diContainer
//   .bind<TeacherController>(Identifiers.TeacherController)
//   .to(TeacherController);
diContainer
    .bind(identifiers_1.default.EmailController)
    .to(EmailController_1.EmailController);
diContainer
    .bind(identifiers_1.default.IParentService)
    .to(parentService_1.ParentService);
diContainer.bind(identifiers_1.default.ParentDbManager).to(ParentDbManager_1.ParentDbManager);
// school
exports.default = diContainer;
//# sourceMappingURL=diConfig.js.map