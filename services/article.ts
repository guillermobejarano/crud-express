import { ArticleModel } from "../models";

export default class ArticleService {    
    
    public fetch() {
        return ArticleModel.find({}).lean().exec();
    }

    public get(id: string) {
        return ArticleModel.findById(id).lean().exec();
    }

    public create(article: any) {
        return ArticleModel.create(article);
    }

    public update (id: string, article: any) {
        return ArticleModel.findByIdAndUpdate(id, article).lean().exec();
    }

    public remove (id: string) {
        return ArticleModel.findByIdAndRemove(id).lean().exec();
    }
}