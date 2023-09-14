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
const routeManager_1 = require("./routeManager");
const identifiers_1 = require("./config/identifiers");
const configParams_1 = require("./config/configParams");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const dbManager_1 = require("./db/dbManager");
const express2 = require("express");
const httpProxy = require("http-proxy");
const cors = require("cors");
const path = require("path");
let ExpressServer = class ExpressServer {
    constructor() {
        /**
         * Reference to the HTTP Server
         */
        this.httpServer = null;
        // Start the Server.
        this.start = (express) => __awaiter(this, void 0, void 0, function* () {
            this.configParams.read();
            yield this.dbManager.connect();
            // support application/json type post data
            express.use(cors());
            express.use(bodyParser.json({ limit: '50mb' }));
            //support application/x-www-form-urlencoded post data
            express.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
            express.use(express_1.json({ limit: '50mb' }));
            express.use(express_1.urlencoded({ limit: '50mb' }));
            express.use(fileUpload());
            express.set("port", process.env.PORT || this.configParams.port);
            express.use(express2.static(path.join(__dirname, "public")));
            express.use(bodyParser({ limit: '50mb' }));
            var proxy = httpProxy.createProxyServer({});
            express.get("/imageapi", (req, res) => {
                console.log("in testimage");
                proxy.web(req, res, { target: "http://127.0.0.1:3010" });
            });
            this.routeManager.configure(express);
            let app1 = express2();
            app1.all("*", function (req, res) {
                res.status(200).sendFile(`/`, { root: path.join(__dirname, "public/") });
            });
            // app1.use(express.json({limit: '50mb'}));
            // app1.use(express.urlencoded({limit: '50mb'}));
            this.httpServer = express.listen(express.get("port"), () => {
                let message = "ExpressServer:start:Express server listening on port " +
                    express.get("port");
                console.log(message);
            });
        });
    }
    stop() {
        if (this.httpServer != null) {
            console.log("ExpressServer:stop:Terminating Test server");
            this.httpServer.close();
        }
    }
};
__decorate([
    inversify_1.inject(identifiers_1.default.RouteManager),
    __metadata("design:type", routeManager_1.RouteManager)
], ExpressServer.prototype, "routeManager", void 0);
__decorate([
    inversify_1.inject(identifiers_1.default.ConfigParams),
    __metadata("design:type", configParams_1.ConfigParams)
], ExpressServer.prototype, "configParams", void 0);
__decorate([
    inversify_1.inject(identifiers_1.default.DbManager),
    __metadata("design:type", dbManager_1.DbManager)
], ExpressServer.prototype, "dbManager", void 0);
ExpressServer = __decorate([
    inversify_1.injectable()
], ExpressServer);
exports.ExpressServer = ExpressServer;
//# sourceMappingURL=expressServer.js.map