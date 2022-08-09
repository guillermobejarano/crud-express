import { expect } from 'chai';
import {Request, Response} from 'express'
import 'mocha';
import { ArticleService } from '../../services';
import { ArticleController } from '../../controllers';
import * as sinon from 'sinon'

describe("ArticleController", () => {
    describe("fetchArticles", () => {
      let req: Request;
      let res: Response;
      let json: any;
      let status: any;
      let send: any;
      let articleService: ArticleService;
      let articleController: ArticleController;
      beforeEach(() => {
        req = {} as Request;
        status = sinon.stub();
        json = sinon.spy();
        send = sinon.stub();
        res = { json, status, send } as Response;
        articleService = new ArticleService();
        status.returns(res);
      });
      it("should return all articles", async function() {
        const stub = sinon.stub(articleService, 'fetch').returns({} as any);
        articleController = new ArticleController(articleService);
        await articleController.fetch(req, res, sinon.spy()); 
        expect(stub.calledOnce).to.be.true;
      });
    });

    describe("findArticle", () => {
      let req: Request;
      let res: Response;
      let json: any;
      let status: any;
      let send: any;
      let articleService: ArticleService;
      let articleController: ArticleController;
      beforeEach(() => {
        req = { params: {}} as Request;
        status = sinon.stub();
        json = sinon.spy();
        send = sinon.stub();
        res = { json, status, send } as Response;
        articleService = new ArticleService();
        status.returns(res);
      });
      it("should return an article", async function() {
        const stub = sinon.stub(articleService, 'get').returns({} as any);
        articleController = new ArticleController(articleService);
        await articleController.find(req, res, sinon.spy()); 
        expect(stub.calledOnce).to.be.true;
      });
      it("should return not found article", async function() {
        const stubGet = sinon.stub(articleService, 'get').returns(Promise.resolve(null));
        articleController = new ArticleController(articleService);
        const foo = await articleController.update(req, res, sinon.spy());
        expect(stubGet.calledOnce).to.be.true;  
        expect(status.args[0][0]).to.equal(404);
      });
    });

    describe("createArticle", () => {
      let req: Request;
      let res: Response;
      let json: any;
      let status: any;
      let send: any;
      let articleService: ArticleService;
      let articleController: ArticleController;
      beforeEach(() => {
        req = { body: {}} as Request;
        status = sinon.stub();
        json = sinon.spy();
        send = sinon.stub();
        res = { json, status, send } as Response;
        articleService = new ArticleService();
        status.returns(res);
      });
      it("should create an article", async function() {
        const stub = sinon.stub(articleService, 'create').returns({} as any);
        articleController = new ArticleController(articleService);
        await articleController.create(req, res, sinon.spy()); 
        expect(stub.calledOnce).to.be.true;
        expect(status.args[0][0]).to.equal(201);
      });
    });

    describe("updateArticle", () => {
      let req: Request;
      let res: Response;
      let json: any;
      let status: any;
      let send: any;
      let articleService: ArticleService;
      let articleController: ArticleController;
      beforeEach(() => {
        req = { params: {}, body: {}} as Request;
        status = sinon.stub();
        json = sinon.spy();
        send = sinon.stub();
        res = { json, status, send } as Response;
        articleService = new ArticleService();
        status.returns(res);
      });
      it("should update an article", async function() {
        const stubUpdate = sinon.stub(articleService, 'update').returns({} as any);
        const stubGet = sinon.stub(articleService, 'get').returns({} as any);
        articleController = new ArticleController(articleService);
        const foo = await articleController.update(req, res, sinon.spy());
        expect(stubGet.calledOnce).to.be.true;
        expect(stubUpdate.calledOnce).to.be.true;        
      });
      it("should return not found article", async function() {
        const stubUpdate = sinon.stub(articleService, 'update').returns({} as any);
        const stubGet = sinon.stub(articleService, 'get').returns(Promise.resolve(null));
        articleController = new ArticleController(articleService);
        const foo = await articleController.update(req, res, sinon.spy());
        expect(stubGet.calledOnce).to.be.true; 
        expect(status.args[0][0]).to.equal(404);
      });
    });    
  });