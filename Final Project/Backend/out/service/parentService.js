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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const ParentDbManager_1 = require("../db/ParentDbManager");
const identifiers_1 = require("../config/identifiers");
let ParentService = class ParentService {
    findfieldpagi(field, table, where, limit, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("findfield Function");
            let actionid = yield this.parentDbManager.findfieldpagi(field, table, where, limit, offset);
            console.log("return in db service");
            return actionid;
        });
    }
    User_Login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Service Function");
            let lastid = yield this.parentDbManager.LoginUser(username, password);
            return lastid;
        });
    }
    allcount(table) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Service Function");
            let lastid = yield this.parentDbManager.allcount(table);
            return lastid;
        });
    }
    findrecords(table, where) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Service Function");
            let lastid = yield this.parentDbManager.findrecords(table, where);
            return lastid;
        });
    }
    loginuser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = yield this.parentDbManager.login(email, password);
            return id;
        });
    }
    delete_data(table, where) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("delete Function");
            let actionid = yield this.parentDbManager.delete_data(table, where);
            return actionid;
        });
    }
    get_data(table) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("record Function");
            let actionid = yield this.parentDbManager.get_data(table);
            return actionid;
        });
    }
    Insert_data(table, col, val, primaryid) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Insert Function");
            let actionid = yield this.parentDbManager.Inser_data(table, col, val, primaryid);
            console.log("Insert Function action id " + actionid);
            return actionid;
        });
    }
    Update_data(table, set, where) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Update Function");
            let actionid = yield this.parentDbManager.Update_data(table, set, where);
            return actionid;
        });
    }
    findfield(field, table, where) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("findfield Function");
            let actionid = yield this.parentDbManager.findfield(field, table, where);
            console.log("return in db service");
            return actionid;
        });
    }
    findcount(field, table, where) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("findfield Function");
            let actionid = yield this.parentDbManager.findfield(field, table, where);
            console.log("return in db service");
            return actionid;
        });
    }
    sumfeild(field, table, where) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("findfield Function");
            let actionid = yield this.parentDbManager.sumfeild(field, table, where);
            console.log("return in db service");
            return actionid;
        });
    }
};
__decorate([
    inversify_1.inject(identifiers_1.default.ParentDbManager),
    __metadata("design:type", ParentDbManager_1.ParentDbManager)
], ParentService.prototype, "parentDbManager", void 0);
ParentService = __decorate([
    inversify_1.injectable()
], ParentService);
exports.ParentService = ParentService;
//# sourceMappingURL=parentService.js.map