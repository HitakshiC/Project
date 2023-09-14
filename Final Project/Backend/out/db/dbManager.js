"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
const pg_1 = require("pg");
const DatabaseConn = "postgres://postgres:cdac@localhost:5432/evproject";
let DbManager = class DbManager {
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            this.db = new pg_1.Client(DatabaseConn);
            // this.db.connect();
            this.db.connect(err => {
                if (err) {
                    console.error('connection error', err.stack);
                }
                else {
                    console.log('connected....');
                }
            });
        });
    }
    insert(table, columns, value, id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(" Dbmgr  ");
            console.log("insert into " + table + "(" + columns + ") values(" + value + ") returning " + id);
            let lastid = yield this.db.query("insert into " + table + "(" + columns + ") values(" + value + ") returning " + id);
            console.log(" Dbmgr return " + lastid);
            return lastid;
        });
    }
    login_user(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("select us.password,al.action_name from user_details us left join  actions_allowed aa on us.usertype = aa.typeid left join action_list al on al.actionid = aa.actionid where username='" + username + "' and password ='" + password + "'");
            let result = yield this.db.query("select us.password,al.action_name from user_details us left join  actions_allowed aa on us.usertype = aa.typeid left join action_list al on al.actionid = aa.actionid where username='" + username + "'");
            console.log("result11", result);
            return result;
        });
    }
    findfieldpagi(field, table, where, limit, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("select" + field + " from " + table + where + " OFFSET " + offset + " LIMIT " + limit);
            //SELECT * FROM users WHERE fname LIKE 'soham%'
            let result = yield this.db.query("select" + field + " from " + table + where + " OFFSET " + offset + " LIMIT " + limit);
            console.log("in db manager");
            return result;
        });
    }
    findrecords(table, where) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("findrecords select * from  " + table + where);
            let result = yield this.db.query("select * from " + table + where);
            return result;
        });
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("select parent_id  from parent where emailid='" +
                email +
                "' and password='" +
                password +
                "'");
            let result = yield this.db.query("select parent_id  from parent where emailid='" +
                email +
                "' and password='" +
                password +
                "'");
            return result;
        });
    }
    getAll_records(table) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("select * from  " + table);
            let result = yield this.db.query("select * from " + table);
            console.log(result);
            return result;
        });
    }
    findfield(field, table, where) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("select" + field + " from " + table + where);
            let result = yield this.db.query("select" + field + " from " + table + where);
            console.log("in db manager");
            return result;
        });
    }
    findcount(field, table, where) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("select count" + field + " from " + table + where);
            let result = yield this.db.query("select" + field + " from " + table + where + "");
            return result;
        });
    }
    sumfeild(field, table, where) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("select SUM" + field + " from " + table + where);
            let result = yield this.db.query("select SUM" + field + " from " + table + where + "");
            return result;
        });
    }
    allcount(table) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("select count(*) from " + table);
            let result = yield this.db.query("select count(*) from " + table);
            return result;
        });
    }
    update(table, set, where) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("update " + table + " set " + set + " where " + where);
            let id = yield this.db.query("update " + table + " set " + set + " where " + where + "");
            return id;
        });
    }
    delete(table, where) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("delete from " + table + " where " + where);
            let res = yield this.db.query("delete from " + table + " where " + where);
            return res;
        });
    }
    view_user_records1(columns, table1, table2, on, where) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("no");
            console.log("select " +
                columns +
                " from " +
                table1 +
                " inner join " +
                table2 +
                " on " +
                on +
                " inner join " +
                " where " +
                where);
            let result = yield this.db.query("select " +
                columns +
                " from " +
                table1 +
                " inner join " +
                table2 +
                " on " +
                on +
                " inner join " +
                " where " +
                where);
            console.log(result);
            return result;
        });
    }
    view_user_records(columns, table1, table2, on, table3, on1, where) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("no");
            console.log("select " +
                columns +
                " from " +
                table1 +
                " inner join " +
                table2 +
                " on " +
                on +
                " inner join " +
                table3 +
                " on " +
                on1 +
                " where " +
                where);
            let result = yield this.db.query("select " +
                columns +
                " from " +
                table1 +
                " inner join " +
                table2 +
                " on " +
                on +
                " inner join " +
                table3 +
                " on " +
                on1 +
                " where " +
                where);
            console.log(result);
            return result;
        });
    }
};
DbManager = __decorate([
    inversify_1.injectable()
], DbManager);
exports.DbManager = DbManager;
//# sourceMappingURL=dbManager.js.map