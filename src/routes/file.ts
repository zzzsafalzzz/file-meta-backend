import { Router } from 'express';

import saveBookSchema from '../schemas/saveBook';
import * as validate from '../middlewares/validate';
import { addToFileHistory, getFileHistory, removeFromFileHistory } from '../controllers/file';

const fileRouter = Router();

fileRouter.get('/history', getFileHistory);

fileRouter.post('/', validate.body(saveBookSchema), addToFileHistory);
fileRouter.delete('/:fileId(\\d+)', removeFromFileHistory);

export default fileRouter;
