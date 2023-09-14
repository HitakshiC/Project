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
let TeacherController = class TeacherController {
    constructor() {
        //Api
        this.submitted_assignment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
            res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
            let field = ' *';
            let id = req.query.id;
            let where = "  where assign_id=" + id;
            try {
                let result = yield this.ParentService.findfield(field, "submit_assignment", where);
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
        });
        this.submit_assignment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
            res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
            let fulldate = commonUtils_1.CommonUtils.postgressDateFormat();
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
            const col = "stud_id,assign_id,created_at,afile";
            const val = `'${req.body.stud_id}','${req.body.assign_id}','${fulldate}','${img}'`;
            try {
                let result = yield this.ParentService.Insert_data("submit_assignment", col, val, 'sa_id');
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
            let set = `t_img='${img}'`;
            let where = ` teacher_id='${id}'`;
            console.log("set: " + set);
            try {
                let id = yield this.ParentService.Update_data(" teacher", set, where);
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
            let set = `teacher_fname='${req.body.fname}', teacher_lname='${req.body.lname}',teacher_contact='${req.body.contact}'`;
            let where = ` teacher_id='${id}'`;
            console.log("set: " + set);
            try {
                let id = yield this.ParentService.Update_data(" teacher", set, where);
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
        this.update_password = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
            res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
            let email = req.body.email;
            let set = `teacher_password='${req.body.password1}', is_verify='1'`;
            let where = ` teacher_email='${email}'`;
            console.log("set: " + set);
            try {
                let id = yield this.ParentService.Update_data(" teacher", set, where);
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
        this.sendmsg = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
            res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
            let fulldate = commonUtils_1.CommonUtils.postgressDateFormat();
            const col = "msg,i_id,g_id,s_id,t_id,msg_date,m_name";
            const val = `'${req.body.msg}','${req.body.i_id}','${req.body.g_id}','${req.body.s_id}','${req.body.t_id}','${fulldate}','${req.body.m_name}'`;
            try {
                let result = yield this.ParentService.Insert_data(" messages", col, val, 'm_id');
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
        this.view_chat = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
            res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
            //let id = req.params.id;
            let field;
            let where;
            let iid = req.query.iid;
            let gid = req.query.gid;
            field = ' m.*';
            where = `  where m.i_id=${iid} AND m.g_id=${gid} ORDER BY m.m_id ASC`;
            try {
                let result = yield this.ParentService.findfield(field, "messages m", where);
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
        });
        // public view_chat_stud = async (req: Request, res: Response) => {
        //   res.header("Access-Control-Allow-Origin", "*");
        //   res.header(
        //     "Access-Control-Allow-Headers",
        //     "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With"
        //   );
        //   res.header(
        //     "Access-Control-Allow-Methods",
        //     "POST, GET, PUT, DELETE, OPTIONS"
        //   );
        //   //let id = req.params.id;
        //   let field 
        //   let where
        //   let iid=req.query.iid;
        //   let gid=req.query.gid;
        //   field = ' m.*';
        //   where = `  where m.i_id=${iid} AND m.g_id=${gid} ORDER BY m.m_id ASC`;
        //   try {
        //     let result = await this.ParentService.findfield(field,"messages m",where);
        //     if (result.rowCount > 0) {
        //       var top = result.rows;
        //       res.json({ status: "1", data: top });
        //     } else {
        //       res.json({ status: "0", message: "No data found" });
        //     }
        //   } catch (error) {
        //     res.statusCode = 500;
        //     res.send(new ErrorResponse(error.name));
        //   }
        // };
        //Api
        this.view_teacherbyid = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
            res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
            //let id = req.params.id;
            let field = ' *';
            let id = req.params.id;
            let where = "  where teacher_id=" + id;
            try {
                let result = yield this.ParentService.findfield(field, "teacher", where);
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
        });
        this.view_assignmentbyid = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
            res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
            //let id = req.params.id;
            let field = ' *';
            let id = req.params.id;
            let where = "  where addedby=" + id;
            try {
                let result = yield this.ParentService.findfield(field, "assignment", where);
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
        });
        this.view_assignmentbystud = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
            res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
            //let id = req.params.id;
            let field = ' *';
            let course = req.query.course;
            let cyear = req.query.cyear;
            let where = ` where acourse='${course}' and ayear='${cyear}'`;
            try {
                let result = yield this.ParentService.findfield(field, "assignment", where);
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
        });
        this.login_teacher = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
            res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
            let email = req.body.email;
            let password = req.body.password;
            let where1 = ` where teacher_email= '${email}' and is_verify='0' `;
            let resfinal = yield this.ParentService.findfield(' teacher_email', "teacher", where1);
            if (resfinal.rowCount > 0) {
                console.log(resfinal.rowCount);
                res.json({ status: "3", message: "Please Verify your account!" });
            }
            else {
                let field = ' *';
                let where = ` where del_flag1='0' and is_verify='1' and teacher_email='${email}' and teacher_password='${password}'`;
                try {
                    let result = yield this.ParentService.findfield(field, " teacher", where);
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
        this.addteacher = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
            res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
            const col = "teacher_fname,teacher_lname,teacher_email,teacher_password,teacher_contact,del_flag1,institute_id,is_verify,t_img";
            const val = `'${req.body.teacher_fname}','${req.body.teacher_lname}','${req.body.teacher_email}','${req.body.teacher_password}','${req.body.teacher_contact}','0','${req.body.institute_id}','0','null'`;
            try {
                let result = yield this.ParentService.Insert_data("teacher", col, val, 'teacher_id');
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
        this.addassignment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
            res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
            const col = "acourse,ayear,subject,date,addedby";
            const val = `'${req.body.acourse}','${req.body.ayear}','${req.body.subject}','${req.body.date}','${req.body.addedby}'`;
            try {
                let result = yield this.ParentService.Insert_data("assignment", col, val, 'aid');
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
        this.view_teacher = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
            res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
            //let id = req.params.id;
            let field = ' *';
            let id = req.query.id;
            let where = ` where del_flag1=0 and institute_id=${id}`;
            let result1 = yield this.ParentService.findcount(" count(*) AS search_count ", " teacher ", where);
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
                let result = yield this.ParentService.findfieldpagi(field, "teacher ", where, per_page, startindex);
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
        this.search_teacher = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
            res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
            let field = ' *';
            var q = req.query.find;
            var id = req.query.id;
            let where = ` where del_flag1='0' and institute_id=${id} and teacher_fname LIKE'%${q}%' `;
            let result1 = yield this.ParentService.findcount(" count(*) AS search_count ", " teacher ", where);
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
                let result = yield this.ParentService.findfieldpagi(field, "teacher ", where, per_page, startindex);
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
        this.router.get("/view/teacher", this.view_teacher);
        this.router.get("/view/teacherbyid/:id", this.view_teacherbyid);
        this.router.get("/search/teacher", this.search_teacher);
        this.router.post("/add/teacher", this.addteacher);
        this.router.post("/login/teacher", this.login_teacher);
        this.router.post("/update/password/teacher", this.update_password);
        this.router.post("/add/assignment", this.addassignment);
        this.router.get("/view/assignment1/:id", this.view_assignmentbyid);
        this.router.get("/view/assignment2", this.view_assignmentbystud);
        //messages Api
        this.router.post("/send/message", this.sendmsg);
        this.router.get("/view/chat", this.view_chat);
        this.router.post("/update/teacher", this.update_profile);
        this.router.post("/change/profile/teacher", this.change_profile);
        this.router.post("/submit/assignment", this.submit_assignment);
        this.router.get("/view/submitted/assignment", this.submitted_assignment);
    }
};
__decorate([
    inversify_1.inject(identifiers_1.default.IParentService),
    __metadata("design:type", Object)
], TeacherController.prototype, "ParentService", void 0);
TeacherController = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], TeacherController);
exports.TeacherController = TeacherController;
//# sourceMappingURL=TeacherController.js.map