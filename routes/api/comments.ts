import {Router} from 'express';
import {CommentController} from '../../controllers';
import { CommentService } from '../../services';

const commentsApi = (router: Router) => {
    const ac = new CommentController(new CommentService());
    router.get('/', ac.fetch.bind(ac));
    router.post('/', ac.create.bind(ac));
    router.put('/:id', ac.update.bind(ac));
    router.delete('/:id', ac.remove.bind(ac));

    return router;
};

export default commentsApi;
