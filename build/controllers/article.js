"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
class ArticleController {
    static fetch(req, res) {
        console.log('fetch');
        res.send(services_1.ArticleService.fetch());
    }
    static find(req, res) {
        const article = services_1.ArticleService.get(+req.params.id);
        res.send(article);
    }
    static create(req, res) {
        res.send(services_1.ArticleService.create(req.body.article));
    }
    static update(req, res) {
        //const article = articles.find(article => article.id === req.params.id);
        //if (!article) {
        //    return res.status(404).send('Article not found');
        //}
        res.send(services_1.ArticleService.update(+req.params.id, req.body.article));
    }
    static remove(req, res) {
        //const article = articles.find(article => article.id === req.params.id);
        //if (!article) {
        //    return res.status(404).send('Article not found');
        //}
        res.send(services_1.ArticleService.remove(+req.params.id));
    }
}
exports.default = ArticleController;
