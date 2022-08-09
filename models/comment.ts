import { Schema, model } from 'mongoose';

interface IComment {
    id: string;
    body: string,
    author: string,
    articleId: string,
}

const commentSchema = new Schema<IComment>({
    articleId: {type: String, required: true},
    author: {type: String, required: true},
    body: {type: String, required: true},
}, {timestamps: true});

const CommentModel = model<IComment>('Comment', commentSchema);

export { IComment }
export { CommentModel }