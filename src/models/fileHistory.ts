import bookshelf from '../config/bookshelf';
import FileHistoryEntity from '../domain/entity/FileHistory';

class FileHistory extends bookshelf.Model<FileHistoryEntity & FileHistory> {
  get requireFetch(): boolean {
    return false;
  }

  get tableName(): string {
    return 'file_history';
  }

  get hasTimestamps(): boolean {
    return true;
  }
}

export default FileHistory;
