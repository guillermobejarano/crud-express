import { CommentModel } from "../models";

export default class CommentService {    
    
    public fetch() {
        return CommentModel.find({}).lean().exec();
    }

    public get(id: string) {
        return CommentModel.findById(id).lean().exec();
    }

    public create(article: any) {
        return CommentModel.create(article);
    }

    public update (id: string, article: any) {
        return CommentModel.findByIdAndUpdate(id, article).lean().exec();
    }

    public remove (id: string) {
        return CommentModel.findByIdAndRemove(id).lean().exec();
    }
}