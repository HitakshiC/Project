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
const dbManager_1 = require("./dbManager");
const identifiers_1 = require("../config/identifiers");
let ParentDbManager = class ParentDbManager {
    LoginUser(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("DbManager");
            let lastid = yield this.dbManager.login_user(username, password);
            return lastid;
        });
    }
    delete_data(table, where) {
        return __awaiter(this, void 0, void 0, function* () {
            let lastid = yield this.dbManager.delete(table, where);
            return lastid;
        });
    }
    allcount(table) {
        return __awaiter(this, void 0, void 0, function* () {
            let lastid = yield this.dbManager.allcount(table);
            return lastid;
        });
    }
    findrecords(table, where) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.dbManager.findrecords(table, where);
            return result;
        });
    }
    get_data(table) {
        return __awaiter(this, void 0, void 0, function* () {
            let lastid = yield this.dbManager.getAll_records(table);
            return lastid;
        });
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.dbManager.login(email, password);
            return result;
        });
    }
    Inser_data(table, columns, value, primaryid) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Dbmngr function  ");
            let lastid = yield this.dbManager.insert(table, columns, value, primaryid);
            console.log("Dbmngr return function  " + lastid);
            return lastid;
        });
    }
    findfieldpagi(field, table, where, limit, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            let lastid = yield this.dbManager.findfieldpagi(field, table, where, limit, offset);
            console.log("return in user db mngr");
            return lastid;
        });
    }
    Update_data(table, set, where) {
        return __awaiter(this, void 0, void 0, function* () {
            let lastid = yield this.dbManager.update(table, set, where);
            return lastid;
        });
    }
    findfield(field, table, where) {
        return __awaiter(this, void 0, void 0, function* () {
            let lastid = yield this.dbManager.findfield(field, table, where);
            console.log("return in user db mngr");
            return lastid;
        });
    }
    findcount(field, table, where) {
        return __awaiter(this, void 0, void 0, function* () {
            let lastid = yield this.dbManager.findcount(field, table, where);
            console.log("return in db mngr");
            return lastid;
        });
    }
    sumfeild(field, table, where) {
        return __awaiter(this, void 0, void 0, function* () {
            let lastid = yield this.dbManager.sumfeild(field, table, where);
            console.log("return in db mngr");
            return lastid;
        });
    }
};
__decorate([
    inversify_1.inject(identifiers_1.default.DbManager),
    __metadata("design:type", dbManager_1.DbManager)
], ParentDbManager.prototype, "dbManager", void 0);
ParentDbManager = __decorate([
    inversify_1.injectable()
], ParentDbManager);
exports.ParentDbManager = ParentDbManager;
//# sourceMappingURL=ParentDbManager.js.map