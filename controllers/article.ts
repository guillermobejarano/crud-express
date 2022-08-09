import {NextFunction, Request, Response} from 'express'
import {ArticleService, CommentService} from '../services';

export default class ArticleController {
    private _articleService: ArticleService;
    constructor(articleService: ArticleService) {
        this._articleService = articleService;
    }

    public async fetch(req: Request, res: Response, next: NextFunction) {
        try { 
            res.send(await this._articleService.fetch());
        } catch (error) {
            next(error);
        }        
    }

    public async find(req: Request, res: Response, next: NextFunction) {
        try { 
            const article = await this.checkArticleExist(req, res);
            res.send(article);
        } catch (error) {
            next(error);
        }        
    }

    public async create(req: Request, res: Response, next: NextFunction) {
        try { 
            res.status(201).send(await this._articleService.create(req.body.article));
        } catch (error) {
            next(error);
        }        
    }

    public async update(req: Request, res: Response, next: NextFunction) {
        try { 
            await this.checkArticleExist(req, res);
            res.send(await this._articleService.update(req.params.id, req.body.article));
        } catch (error) {
            next(error);
        }        
    }

    public async remove(req: Request, res: Response, next: NextFunction) {        
        try { 
            await this.checkArticleExist(req, res);
            Promise.all([
                this._articleService.remove(req.params.id),
                new CommentService().removeAllByPropery(req.params.id, 'articleId')
            ]);
            res.send();
        } catch (error) {
            next(error);
        }        
    }

    private async checkArticleExist(req: Request, res: Response) {
        const article = await this._articleService.get(req.params.id);
        if (!article) {
            return res.status(404).send({'error':'Article not found'});
        }
        return article;
    }
}