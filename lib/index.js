"use strict";
//file to export DefaultHoplite and HopliteSchemas
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashMethods = exports.HopliteSchemas = exports.DefaultHoplite = void 0;
var DefaultHoplite_1 = require("./modes/DefaultHoplite");
var AuthorizationController_1 = require("./authorization/AuthorizationController");
var AuthenticationController_1 = require("./authentication/AuthenticationController");
var HopliteSchemas_1 = require("./modes/HopliteSchemas");
var HashMethods_1 = require("./modes/HashMethods");
var DefaultHoplite = new DefaultHoplite_1.default(AuthenticationController_1.authenticate, AuthorizationController_1.authorize);
exports.DefaultHoplite = DefaultHoplite;
var HopliteSchemas = new HopliteSchemas_1.HopliteSchemasBlueprint();
exports.HopliteSchemas = HopliteSchemas;
var HashMethods = new HashMethods_1.HashingMethodsBlueprint();
exports.HashMethods = HashMethods;
