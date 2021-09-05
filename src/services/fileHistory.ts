import logger from '../utils/logger';

import FileHistory from '../models/fileHistory';
import FileHistoryEntity from '../domain/entity/FileHistory';

/**
 * Fetches all file history list from db.
 */
export async function fetchHistory() {
  logger.info('Fetching all file history from DB.');
  const data = await new FileHistory().fetchAll();

  logger.info(`Fetched ${data.length} file history entries from DB.`);

  return { data };
}

/**
 * Saves a new file into db.
 */
export async function saveFile(file: Omit<FileHistoryEntity, 'id' | 'updatedAt' | 'createdAt'>) {
  logger.info('Saving new file into DB.');
  const data = await new FileHistory(file).save();

  logger.info(`Saved new file with id '${data.id}' into DB.`);

  return { data };
}

/**
 * Removes given file from db.
 */
export async function removeFile(fileId: number) {
  logger.info(`Removing file: ${fileId} history from DB.`);
  const data = await new FileHistory({ id: fileId }).destroy();
  logger.info(`Removed file: ${fileId} from DB.`);

  return { data };
}
