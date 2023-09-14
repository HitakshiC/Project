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
const express_1 = require("express");
const commonUtils_1 = require("../util/commonUtils");
const identifiers_1 = require("../config/identifiers");
const errorResponse_1 = require("../dto/errorResponse");
//import { EncryptionUtil } from "../util/encryptionUtil";
let StudentController = class StudentController {
    constructor() {
        //Api
        this.change_profile = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
            res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
            var Profile;
            var uploadPath;
            Profile = req.files.Profile;
            let img = commonUtils_1.CommonUtils.generateUniqueID() + "-" + Profile.name;
            let path = "E:/Final year project/frontend/public";
            uploadPath = path + '/uploads/' + img;
            console.log(Profile.name);
            Profile.mv(uploadPath, function (err) {
                if (err) {
                    // return res.status(500).send(err);
                    console.log("fail");
                }
                else {
                    console.log('File uploaded!');
                }
            });
            let id = req.body.id;
            let set = `s_img='${img}'`;
            let where = ` student_id='${id}'`;
            console.log("set: " + set);
            try {
                let id = yield this.ParentService.Update_data(" student", set, where);
                console.log(id);
                if (id && id.rowCount > 0) {
                    res
                        .status(200)
                        .json({ status: "1", message: "Record Updated Successfully" });
                }
                else {
                    res.status(200).json({ status: "0", message: "Record Update Failed" });
                }
            }
            catch (error) {
                res.statusCode = 500;
                res.send(new errorResponse_1.ErrorResponse(error.name));
            }
        });
        this.update_profile = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
            res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
            let id = req.body.id;
            let set = `student_fname='${req.body.fname}', student_lname='${req.body.lname}',student_contact='${req.body.contact}'`;
            let where = ` student_id='${id}'`;
            console.log("set: " + set);
            try {
                let id = yield this.ParentService.Update_data(" student", set, where);
                console.log(id);
                if (id && id.rowCount > 0) {
                    res
                        .status(200)
                        .json({ status: "1", message: "Record Updated Successfully" });
                }
                else {
                    res.status(200).json({ status: "0", message: "Record Update Failed" });
                }
            }
            catch (error) {
                res.statusCode = 500;
                res.send(new errorResponse_1.ErrorResponse(error.name));
            }
        });
        this.view_grp = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
            res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
            //let id = req.params.id;
            let field;
            let where;
            let id = req.query.sid;
            field = ' sg.*,s.*,g.*';
            where = ` Join studgrp sg on sg.studentid=s.student_id Join groups g on g.group_id=sg.groupid where s.student_id=${id} `;
            try {
                let result = yield this.ParentService.findfield(field, "student s", where);
                if (result.rowCount > 0) {
                    var top = result.rows;
                    res.json({ status: "1", data: top, gcount: result.rowCount });
                }
                else {
                    res.json({ status: "0", message: "No data found" });
                }
            }
            catch (error) {
                res.statusCode = 500;
                res.send(new errorResponse_1.ErrorResponse(error.name));
            }
        });
        this.login_stud = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
            res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
            let email = req.body.email;
            let password = req.body.password;
            let where1 = ` where student_email= '${email}' and student_password='${password}' and is_verify='0' `;
            let resfinal = yield this.ParentService.findfield(' student_email', "student", where1);
            if (resfinal.rowCount > 0) {
                console.log(resfinal.rowCount);
                res.json({ status: "3", message: "Please Verify your account!" });
            }
            else {
                let field = ' *';
                let where = ` where is_deleted='0' and is_verify='1' and student_email='${email}' and student_password='${password}'`;
                try {
                    let result = yield this.ParentService.findfield(field, " student", where);
                    if (result.rowCount > 0) {
                        var top = result.rows;
                        res.json({ status: "1", data: top });
                    }
                    else {
                        res.json({ status: "0", message: "No data found" });
                    }
                }
                catch (error) {
                    res.statusCode = 500;
                    res.send(new errorResponse_1.ErrorResponse(error.name));
                }
            }
        });
        this.update_password = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
            res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
            let email = req.body.email;
            let set = `student_password='${req.body.password1}', is_verify='1'`;
            let where = ` student_email='${email}'`;
            console.log("set: " + set);
            try {
                let id = yield this.ParentService.Update_data(" student", set, where);
                console.log(id);
                if (id && id.rowCount > 0) {
                    res
                        .status(200)
                        .json({ status: "1", message: "Record Updated Successfully" });
                }
                else {
                    res.status(200).json({ status: "0", message: "Record Update Failed" });
                }
            }
            catch (error) {
                res.statusCode = 500;
                res.send(new errorResponse_1.ErrorResponse(error.name));
            }
        });
        this.addstudent = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
            res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
            const col = "student_fname,student_lname,student_email,student_password,student_contact,is_deleted,is_verify,institute_id,s_img,course,cyear";
            const val = `'${req.body.student_fname}','${req.body.student_lname}','${req.body.student_email}','${req.body.student_contact}','${req.body.student_contact}','0','0','${req.body.institute_id}','null','${req.body.course}','${req.body.year}'`;
            try {
                let result = yield this.ParentService.Insert_data("student", col, val, 'student_id');
                if (result.rowCount > 0) {
                    var data = result.rows;
                    res.json({ status: "1", data: data });
                }
                else {
                    res.json({ status: "0", message: "No data found" });
                }
            }
            catch (error) {
                res.statusCode = 500;
                res.send(new errorResponse_1.ErrorResponse(error.name));
            }
        });
        this.view_user_byid = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
            res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
            let id = req.params.id;
            let field = ' *';
            let where = `  where is_deleted=0 and student_id=${id}`;
            try {
                let result = yield this.ParentService.findfield(field, " student", where);
                if (result.rowCount > 0) {
                    var top = result.rows;
                    res.json({ status: "1", data: top, scount: result.rowCount });
                }
                else {
                    res.json({ status: "0", message: "No data found" });
                }
            }
            catch (error) {
                res.statusCode = 500;
                res.send(new errorResponse_1.ErrorResponse(error.name));
            }
        });
        this.view_user = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
            res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
            //let id = req.params.id;
            let field = ' *';
            let id = req.query.id;
            let where = `  where is_deleted=0 and institute_id=${id}`;
            let result1 = yield this.ParentService.findcount(" count(*) AS search_count ", " student ", where);
            if (result1.rowCount > 0) {
                var count = result1.rows[0].search_count;
                console.log("Count" + result1.rows[0].search_count);
                // res.json({ status: "1", data: count });
            }
            const page = req.query.page;
            const per_page = req.query.perpage;
            const total = count;
            const cal = total / per_page;
            const total_result = Math.ceil(cal);
            const startindex = (page - 1) * per_page;
            try {
                let result = yield this.ParentService.findfieldpagi(field, "student ", where, per_page, startindex);
                if (result.rowCount > 0) {
                    var top = result.rows;
                    var perpagecnt = result.rowCount;
                    console.log("Data", result.rowCount);
                    res.json({ status: "1", page: page, per_page: per_page, total: total, perpagecnt: perpagecnt, total_pages: total_result, data: top });
                }
                else {
                    res.json({ status: "0", message: "No data found" });
                }
            }
            catch (error) {
                res.statusCode = 500;
                res.send(new errorResponse_1.ErrorResponse(error.name));
            }
        });
        this.search_student = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
            res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
            let field = ' *';
            let id = req.query.id;
            var q = req.query.find;
            let where = ` where is_deleted='0' and institute_id=${id} and student_fname LIKE'%${q}%' `;
            let result1 = yield this.ParentService.findcount(" count(*) AS search_count ", " student ", where);
            if (result1.rowCount > 0) {
                var count = result1.rows[0].search_count;
                console.log("Count" + result1.rows[0].search_count);
                // res.json({ status: "1", data: count });
            }
            const page = req.query.page;
            const per_page = req.query.perpage;
            const total = count;
            const cal = total / per_page;
            const total_result = Math.ceil(cal);
            const startindex = (page - 1) * per_page;
            try {
                let result = yield this.ParentService.findfieldpagi(field, "student ", where, per_page, startindex);
                if (result.rowCount > 0) {
                    var top = result.rows;
                    var perpagecnt = result.rowCount;
                    console.log("Data", result.rowCount);
                    res.json({ status: "1", page: page, per_page: per_page, total: total, perpagecnt: perpagecnt, total_pages: total_result, data: top });
                }
                else {
                    res.json({ status: "0", message: "No data found" });
                }
            }
            catch (error) {
                res.statusCode = 500;
                res.send(new errorResponse_1.ErrorResponse(error.name));
            }
        });
        this.router = express_1.Router();
        this.router.get("/view/student", this.view_user);
        this.router.get("/view/studentbyid/:id", this.view_user_byid);
        this.router.get("/search/student", this.search_student);
        this.router.post("/add/student", this.addstudent);
        this.router.post("/login/student", this.login_stud);
        this.router.get("/view/group/stud", this.view_grp);
        this.router.post("/update/password/student", this.update_password);
        this.router.post("/update/student", this.update_profile);
        this.router.post("/change/profile/student", this.change_profile);
    }
};
__decorate([
    inversify_1.inject(identifiers_1.default.IParentService),
    __metadata("design:type", Object)
], StudentController.prototype, "ParentService", void 0);
StudentController = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], StudentController);
exports.StudentController = StudentController;
//# sourceMappingURL=StudentController.js.map