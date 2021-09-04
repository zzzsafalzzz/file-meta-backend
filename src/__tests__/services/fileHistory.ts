import { fetchHistory, removeFile, saveFile } from '../../services/fileHistory';

jest.mock('../../models/fileHistory', () => ({
  __esModule: true,
  default: function () {
    return {
      save: jest.fn(() => Promise.resolve(mockFileHistory)),
      destroy: jest.fn(() => Promise.resolve(mockFileHistory)),
      fetchAll: jest.fn(() => Promise.resolve(fileHistoryList))
    };
  }
}));

var mockFileHistory = {
  fileName: 'TestFile.pdf',
  fileType: 'application/pdf',
  fileSize: 123123,
  lastModified: new Date()
};

var fileHistoryList = [mockFileHistory];

describe('Service: fetchHistory', () => {
  it('should return an array of file history', async () => {
    const response = await fetchHistory();
    expect(response).toBeDefined();
    expect(response).toEqual({ data: fileHistoryList });
  });
});

describe('Service: saveFile', () => {
  it('should return the fileHistory', async () => {
    const response = await saveFile(mockFileHistory);
    expect(response).toBeDefined();
    expect(response).toEqual({ data: mockFileHistory });
  });
});

describe('Service: removeFile', () => {
  it('should return a fileHistory', async () => {
    const response = await removeFile(1);
    expect(response).toBeDefined();
    expect(response).toEqual({ data: mockFileHistory });
  });
});
