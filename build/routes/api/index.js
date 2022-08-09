"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const articles_1 = __importDefault(require("./articles"));
const routes = (router) => {
    router.use(`/articles`, (0, articles_1.default)((0, express_1.Router)()));
    return router;
};
exports.default = routes;
