import { Router } from 'express';

import { addToFileHistory, getFileHistory, removeFromFileHistory } from '../controllers/file';

const fileRouter = Router();

fileRouter.get('/history', getFileHistory);

fileRouter.post('/', addToFileHistory);
fileRouter.delete('/:fileId(\\d+)', removeFromFileHistory);

export default fileRouter;
