import { Schema, model } from 'mongoose';

interface IArticle {
    id: string;
    title: string;
    body: string;
    author: string;
}

const articleSchema = new Schema<IArticle>({
    title: {type: String, required: true},
    author: {type: String, required: true},
    body: {type: String, required: true},
}, {timestamps: true});

const ArticleModel = model<IArticle>('Article', articleSchema);

export { IArticle }
export { ArticleModel }
