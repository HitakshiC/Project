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
// import { CommonUtils } from '../util/commonUtils';
const identifiers_1 = require("../config/identifiers");
const errorResponse_1 = require("../dto/errorResponse");
//import { EncryptionUtil } from "../util/encryptionUtil";
var nodemailer = require('nodemailer');
let EmailController = class EmailController {
    constructor() {
        this.sendotp = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
            res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
            //let id=req.params.id
            let where = "  ";
            let field = " *";
            let otp = Math.floor(1000 + Math.random() * 9000);
            try {
                let result = yield this.ParentService.findfield(field, "user_tbl", where);
                if (result.rowCount > 0) {
                    var top = result.rows;
                    res.json({ status: "1", data: top, otp: otp });
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
        this.bookingotp = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
            res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
            var otp = req.body.otp;
            var email = req.body.email;
            console.log(otp);
            var subject = "Payment against car booking";
            const textmail = `<html>
   <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
   </head>
   <body style="margin:0px;padding:0px">
   <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
   <div style="margin:50px auto;width:70%;padding:20px 0">
     <div style="border-bottom:1px solid #eee">
       <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">EcoWheels </a>
     </div>
     <p style="font-size:1.1em">Hi,</p>
     <p>Thank you for choosing Your EcoWheels . Use the following OTP to complete your Booking procedures.</p>
     <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
     <p style="font-size:0.9em;">Regards,<br />EcoWheels </p>
     <hr style="border:none;border-top:1px solid #eee" />
     <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
       <p>EcoWheels</p>
       <p>EV Company</p>
       <p>India</p>
     </div>
   </div>
 </div>
   </body>
   </html>`;
            const email_res = this.sendmail(email, subject, textmail);
            if (email_res) {
                res.json({ status: "1", data: "email send sucess" });
            }
            else {
                res.json({ status: "0", message: "error" });
            }
        });
        this.sendmail = (tomail, subject, textmail) => __awaiter(this, void 0, void 0, function* () {
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'hitakshi06@gmail.com',
                    pass: 'qwydzqulxictpigc'
                },
                secure: false,
                logger: true,
                debug: true,
                ignoreTLS: true // add this 
            });
            var mailOptions = {
                from: 'hitakshi06@gmail.com',
                to: tomail,
                subject: subject,
                html: textmail
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log('Email sent: ' + info.response);
                }
            });
        });
        this.router = express_1.Router();
        this.router.post("/otp/mail/booking", this.bookingotp);
        this.router.get("/send/otp/booking", this.sendotp);
    }
};
__decorate([
    inversify_1.inject(identifiers_1.default.IParentService),
    __metadata("design:type", Object)
], EmailController.prototype, "ParentService", void 0);
EmailController = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], EmailController);
exports.EmailController = EmailController;
//# sourceMappingURL=EmailController.js.map