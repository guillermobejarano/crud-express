"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
class ArticleService {
    static fetch() {
        return models_1.Article.find({}).lean().exec();
    }
    static get(id) {
    }
    static create(article) {
        return models_1.Article.create(article);
    }
    static update(id, article) {
    }
    static remove(id) {
    }
}
exports.default = ArticleService;
