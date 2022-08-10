import {NextFunction, Request, Response} from 'express'
import {CommentService} from '../services';

export default class CommentController {
    private _commentService: CommentService;
    constructor(articleService: CommentService) {
        this._commentService = articleService;
    }

    public async fetch(req: Request, res: Response, next: NextFunction) {
        try {
            if (req.query.article) {
                res.send(await this._commentService.getByArticleId(req.query.article as string));
            } else {
                res.send(await this._commentService.fetch());
            }            
        } catch (error) {
            next(error);
        }        
    }

    public async find(req: Request, res: Response, next: NextFunction) {
        try {
            const comment = await this.checkCommentExist(req, res);
            res.send(comment);
        } catch (error) {
            next(error);
        }        
    }

    public async create(req: Request, res: Response, next: NextFunction) {
        try {
            res.status(201).send(await this._commentService.create(req.body.comment));
        } catch (error) {
            next(error);
        }        
    }

    public async update(req: Request, res: Response, next: NextFunction) {
        try {
            await this.checkCommentExist(req, res);
            res.send(await this._commentService.update(req.params.id, req.body.comment));
        } catch (error) {
            next(error);
        }
    }

    public async remove(req: Request, res: Response, next: NextFunction) {        
        try { 
            await this.checkCommentExist(req, res);
            res.send(await this._commentService.remove(req.params.id));
        } catch (error) {
            next(error);
        }      
    }

    private async checkCommentExist(req: Request, res: Response) {
        const comment = await this._commentService.get(req.params.id);
        if (!comment) {
            return res.status(404).send({'error':'Comment not found'});
        }
        return comment;
    }
}