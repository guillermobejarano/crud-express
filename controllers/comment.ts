import {Request, Response} from 'express'
import {CommentService} from '../services';

export default class CommentController {
    private _commentService: CommentService;
    constructor(articleService: CommentService) {
        this._commentService = articleService;
    }

    public async fetch(req: Request, res: Response) {
        res.send(await this._commentService.fetch());
    }

    public async find(req: Request, res: Response) {
        const article = await this._commentService.get(req.params.id);
        res.send(article);
    }

    public async create(req: Request, res: Response) {
        console.log(req.body);
        res.send(await this._commentService.create(req.body.comment));
    }

    public async update(req: Request, res: Response) {
        //const article = articles.find(article => article.id === req.params.id);
        //if (!article) {
        //    return res.status(404).send('Article not found');
        //}
        res.send(await this._commentService.update(req.params.id, req.body.comment));
    }

    public async remove(req: Request, res: Response) {
        //const article = articles.find(article => article.id === req.params.id);
        //if (!article) {
        //    return res.status(404).send('Article not found');
        //}
        res.send(await this._commentService.remove(req.params.id));
    }
}