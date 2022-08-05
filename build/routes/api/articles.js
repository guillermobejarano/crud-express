"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../../controllers");
const articlesApi = (router) => {
    router.get('/', controllers_1.ArticleController.fetch);
    router.post('/', controllers_1.ArticleController.create);
    router.get('/:id', controllers_1.ArticleController.find);
    router.put('/:id', controllers_1.ArticleController.update);
    router.delete('/:id', controllers_1.ArticleController.remove);
    return router;
};
exports.default = articlesApi;
