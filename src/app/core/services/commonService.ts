import FileSaver from 'file-saver';
/**
 * @description 檔案儲存處理器
 * @param path 檔案路徑
 * @param fileName 檔案名稱
*/
const handleFileSave = (path: string, fileName: string) => {
  FileSaver.saveAs(path, fileName);
}

export default {
  handleFileSave
};

