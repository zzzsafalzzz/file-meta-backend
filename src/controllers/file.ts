import { Response, Request } from 'express';

import { fetchHistory, removeFile, saveFile } from '../services/fileHistory';

/**
 * Handles getFileHistory request.
 *
 * @param {Request} req
 * @param {Response} res
 */
export async function getFileHistory(req: Request, res: Response) {
  return fetchHistory().then((data) => res.status(200).json(data));
}

/**
 * Handles addToFileHistory request.
 *
 * @param {Request} req
 * @param {Response} res
 */
export async function addToFileHistory(req: Request, res: Response) {
  return saveFile(req.body).then((data) => res.status(200).json(data));
}

/**
 * Handles removeFromFileHistory request.
 *
 * @param {Request} req
 * @param {Response} res
 */
export async function removeFromFileHistory(req: Request, res: Response) {
  const fileId = +req.params.fileId;

  return removeFile(fileId).then((data) => res.status(200).json(data));
}
