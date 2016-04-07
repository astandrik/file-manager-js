var USER_FILES_PATH = '/images/products/';
var USER_FILES_ABSOLUTE_PATH = '';

module.exports = {
  Enabled: true,
  UserFilesPath: USER_FILES_PATH,
  UserFilesAbsolutePath: USER_FILES_ABSOLUTE_PATH,
  ForceSingleExtension: true,
  SecureImageUploads: true,
  ConfigAllowedCommands: ['QuickUpload', 'FileUpload', 'GetFolders', 'GetFoldersAndFiles', 'CreateFolder'],
  ConfigAllowedTypes: ['File', 'Image', 'Flash', 'Media'],
  HtmlExtensions: ["html", "htm", "xml", "xsd", "txt", "js"],
  ChmodOnUpload: 0777,
  ChmodOnFolderCreate: 0777,
  AllowedExtensions: {
    File: ['7z', 'aiff', 'asf', 'avi', 'bmp', 'csv', 'doc', 'fla', 'flv', 'gif', 'gz', 'gzip', 'jpeg', 'jpg', 'mid', 'mov', 'mp3', 'mp4', 'mpc', 'mpeg', 'mpg', 'ods', 'odt', 'pdf', 'png', 'ppt', 'pxd', 'qt', 'ram', 'rar', 'rm', 'rmi', 'rmvb', 'rtf', 'sdc', 'sitd', 'swf', 'sxc', 'sxw', 'tar', 'tgz', 'tif', 'tiff', 'txt', 'vsd', 'wav', 'wma', 'wmv', 'xls', 'xml', 'zip'],
    Image: ['bmp','gif','jpeg','jpg','png'],
    Flash: ['swf','flv'],
    Media: ['aiff', 'asf', 'avi', 'bmp', 'fla', 'flv', 'gif', 'jpeg', 'jpg', 'mid', 'mov', 'mp3', 'mp4', 'mpc', 'mpeg', 'mpg', 'png', 'qt', 'ram', 'rm', 'rmi', 'rmvb', 'swf', 'tif', 'tiff', 'wav', 'wma', 'wmv']
  },
  DeniedExtensions: {
    File: [],
    Image: [],
    Flash: [],
    Media: []
  },
  FileTypesPath: {
    File: USER_FILES_PATH + 'file/',
    Image: USER_FILES_PATH + 'image/',
    Flash: USER_FILES_PATH + 'flash/',
    Media: USER_FILES_PATH + 'media/',
  },
  FileTypesAbsolutePath:{
    File: USER_FILES_ABSOLUTE_PATH == '' ? '' : USER_FILES_ABSOLUTE_PATH +'file/',
    Image: USER_FILES_ABSOLUTE_PATH == '' ? '' : USER_FILES_ABSOLUTE_PATH + 'image/',
    Flash: USER_FILES_ABSOLUTE_PATH == '' ? '' : USER_FILES_ABSOLUTE_PATH + 'flash/',
    Media: USER_FILES_ABSOLUTE_PATH == '' ? '' : USER_FILES_ABSOLUTE_PATH + 'media/',
  },
  QuickUploadPath: {
    File: USER_FILES_PATH + 'file/',
    Image: USER_FILES_PATH + 'image/',
    Flash: USER_FILES_PATH + 'flash/',
    Media: USER_FILES_PATH + 'media/',
  },
  QuickUploadAbsolutePath: {
    File: USER_FILES_ABSOLUTE_PATH,
    Image: USER_FILES_ABSOLUTE_PATH,
    Flash: USER_FILES_ABSOLUTE_PATH,
    Media: USER_FILES_ABSOLUTE_PATH,
  }
}