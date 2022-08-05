"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const articleSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    body: { type: String, required: true },
}, { timestamps: true });
const Article = (0, mongoose_1.model)('Article;', articleSchema);
exports.default = Article;
