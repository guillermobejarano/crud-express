import {Request, Response} from 'express'
import {ArticleService} from '../services';

export default class ArticleController {
    private _articleService: ArticleService;
    constructor(articleService: ArticleService) {
        this._articleService = articleService;
    }

    public async fetch(req: Request, res: Response) {
        res.send(await this._articleService.fetch());
    }

    public async find(req: Request, res: Response) {
        const article = await this._articleService.get(req.params.id);
        res.send(article);
    }

    public async create(req: Request, res: Response) {
        res.send(await this._articleService.create(req.body.article));
    }

    public async update(req: Request, res: Response) {
        //const article = articles.find(article => article.id === req.params.id);
        //if (!article) {
        //    return res.status(404).send('Article not found');
        //}
        res.send(await this._articleService.update(req.params.id, req.body.article));
    }

    public async remove(req: Request, res: Response) {
        //const article = articles.find(article => article.id === req.params.id);
        //if (!article) {
        //    return res.status(404).send('Article not found');
        //}
        res.send(await this._articleService.remove(req.params.id));
    }
}