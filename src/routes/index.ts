import { Router } from 'express';

import fileRouter from './file';

const appRouter = Router();

appRouter.use('/files', fileRouter);

export default appRouter;
