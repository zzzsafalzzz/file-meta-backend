import FileHistory from '../../models/fileHistory';

describe('Model: FileHistory', () => {
  it('should use correct table', async () => {
    expect(FileHistory).toBeDefined();
    expect(new FileHistory().tableName).toEqual('file_history');
    expect(new FileHistory().requireFetch).toEqual(false);
    expect(new FileHistory().hasTimestamps).toEqual(true);
  });
});
