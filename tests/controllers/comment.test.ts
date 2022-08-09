import { expect } from 'chai';
import {Request, Response} from 'express'
import 'mocha';
import { CommentService } from '../../services';
import { CommentController } from '../../controllers';
import * as sinon from 'sinon'

describe("CommentController", () => {
    describe("fetchComment", () => {
      let req: Request;
      let res: Response;
      let json: any;
      let status: any;
      let send: any;
      let commentService: CommentService;
      let commentController: CommentController;
      beforeEach(() => {
        req = {} as Request;
        status = sinon.stub();
        json = sinon.spy();
        send = sinon.stub();
        res = { json, status, send } as Response;
        commentService = new CommentService();
        status.returns(res);
      });
      it("should return all comments", async function() {
        const stub = sinon.stub(commentService, 'fetch').returns({} as any);
        commentController = new CommentController(commentService);
        await commentController.fetch(req, res, sinon.spy()); 
        expect(stub.calledOnce).to.be.true;
      });
    });

    describe("findComment", () => {
      let req: Request;
      let res: Response;
      let json: any;
      let status: any;
      let send: any;
      let commentService: CommentService;
      let commentController: CommentController;
      beforeEach(() => {
        req = { params: {}} as Request;
        status = sinon.stub();
        json = sinon.spy();
        send = sinon.stub();
        res = { json, status, send } as Response;
        commentService = new CommentService();
        status.returns(res);
      });
      it("should return a comment", async function() {
        const stub = sinon.stub(commentService, 'get').returns({} as any);
        commentController = new CommentController(commentService);
        await commentController.find(req, res, sinon.spy()); 
        expect(stub.calledOnce).to.be.true;
      });
    });

    describe("createComment", () => {
      let req: Request;
      let res: Response;
      let json: any;
      let status: any;
      let send: any;
      let commentService: CommentService;
      let commentController: CommentController;
      beforeEach(() => {
        req = { body: {}} as Request;
        status = sinon.stub();
        json = sinon.spy();
        send = sinon.stub();
        res = { json, status, send } as Response;
        commentService = new CommentService();
        status.returns(res);
      });
      it("should create a comment", async function() {
        const stub = sinon.stub(commentService, 'create').returns({} as any);
        commentController = new CommentController(commentService);
        await commentController.create(req, res, sinon.spy()); 
        expect(stub.calledOnce).to.be.true;
        expect(status.args[0][0]).to.equal(201);
      });
    });

    describe("updateComment", () => {
      let req: Request;
      let res: Response;
      let json: any;
      let status: any;
      let send: any;
      let commentService: CommentService;
      let commentController: CommentController;
      beforeEach(() => {
        req = { params: {}, body: {}} as Request;
        status = sinon.stub();
        json = sinon.spy();
        send = sinon.stub();
        res = { json, status, send } as Response;
        commentService = new CommentService();
        status.returns(res);
      });
      it("should update a comment", async function() {
        const stubUpdate = sinon.stub(commentService, 'update').returns({} as any);
        const stubGet = sinon.stub(commentService, 'get').returns({} as any);
        commentController = new CommentController(commentService);
        await commentController.update(req, res, sinon.spy()); 
        expect(stubUpdate.calledOnce).to.be.true;
        expect(stubGet.calledOnce).to.be.true;
      });
      it("should not found comment", async function() {
        const stubUpdate = sinon.stub(commentService, 'update').returns({} as any);
        const stubGet = sinon.stub(commentService, 'get').returns(Promise.resolve(null));
        commentController = new CommentController(commentService);
        await commentController.update(req, res, sinon.spy());
        expect(stubGet.calledOnce).to.be.true;
        expect(status.args[0][0]).to.equal(404);
      });
    });
  });