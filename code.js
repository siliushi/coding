/**
 * 修改文件编码格式，例如：GBK转UTF8
 * 支持多级目录
 * @param {String} [root_path] [需要进行转码的文件路径]
 * @param {Array}  [file_type] [需要进行转码的文件格式，比如html文件]
 * @param {String} [from_code] [文件的编码]
 * @param {String} [to_code]   [文件的目标编码]
 */

// 引入包
var fs = require('fs'),
  iconv = require('iconv-lite');

// 全局变量
var root_path = './html',
    file_type = ['js', 'html'],
    from_code = 'GBK',
    to_code   = 'UTF8';

/**
 * 判断元素是否在数组内
 * @date   2015-01-13
 * @param  {[String]}   elem [被查找的元素]
 * @return {[bool]}        [description]
 */
Array.prototype.inarray = function(elem) {
  "use strict";
  var l = this.length;
  while (l--) {
    if (this[l] === elem) {
      return true;
    }
  }
  return false;
};


/**
 * 转码函数
 * @date   2015-01-13
 * @param  {[String]}   root [编码文件目录]
 * @return {[type]}        [description]
 */
function encodeFiles(root) {
  "use strict";
  var files = fs.readdirSync(root);
  files.forEach(function(file) {
    var pathname = root + '/' + file,
      stat = fs.lstatSync(pathname);
    if (!stat.isDirectory()) {
      var name = file.toString();
      if (!file_type.inarray(name.substring(name.lastIndexOf('.') + 1))) {
        return;
      }
      fs.writeFile(pathname, iconv.decode(fs.readFileSync(pathname), from_code), {
        encoding: to_code
      }, function(err) {
        if (err) {
          throw err;
        }
      });
    } else {
      encodeFiles(pathname);
    }
  });
}
encodeFiles(root_path);