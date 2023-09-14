"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const fs = require("fs");
let ConfigParams = class ConfigParams {
    constructor() {
        this.read = () => {
            let fileContents = fs.readFileSync('Config.json', 'utf-8');
            let configObj = JSON.parse(fileContents);
            this.mongoHost = configObj.mongoHost;
            this.port = configObj.port;
        };
    }
};
ConfigParams = __decorate([
    inversify_1.injectable()
], ConfigParams);
exports.ConfigParams = ConfigParams;
//# sourceMappingURL=configParams.js.map