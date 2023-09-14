"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const diConfig_1 = require("./config/diConfig");
const express = require("express");
const identifiers_1 = require("./config/identifiers");
const cors = require("cors");
var router = express.Router();
//options for cors midddleware
const options = {
    allowedHeaders: [
        "Origin",
        "X-Requested-With",
        "Content-Type",
        "Accept",
        "X-Access-Token",
    ],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: "localhost:4019",
    preflightContinue: false,
};
//use cors middleware
router.use(cors(options));
//add your routes
//enable pre-flight
router.options("*", cors(options));
(() => __awaiter(this, void 0, void 0, function* () {
    let app = express();
    try {
        // Create the App
        let expressServer = diConfig_1.default.get(identifiers_1.default.ExpressServer);
        // Start the App
        yield expressServer.start(app);
    }
    catch (e) {
        let message = "app:Error starting app";
        console.error(message);
        console.error(e);
        throw e;
    }
}))();
//# sourceMappingURL=app.js.map