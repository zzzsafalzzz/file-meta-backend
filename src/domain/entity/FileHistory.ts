interface FileHistory {
  id: number;
  fileName: string;
  fileType: string;
  fileSize: number;
  lastModified: Date;
  createdAt: Date;
  updatedAt: Date;
}

export default FileHistory;
