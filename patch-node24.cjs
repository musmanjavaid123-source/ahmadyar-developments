const fs = require('node:fs');

const origReadlink = fs.readlink;
const origReadlinkSync = fs.readlinkSync;

fs.readlinkSync = function(path, options) {
  try {
    return origReadlinkSync.call(fs, path, options);
  } catch (err) {
    if (err && err.code === 'EISDIR') {
      err.code = 'EINVAL';
    }
    throw err;
  }
};

fs.readlink = function(path, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = undefined;
  }
  return origReadlink.call(fs, path, options, (err, linkString) => {
    if (err && err.code === 'EISDIR') {
      err.code = 'EINVAL';
    }
    if (callback) callback(err, linkString);
  });
};

if (fs.promises && fs.promises.readlink) {
  const origPromisesReadlink = fs.promises.readlink;
  fs.promises.readlink = async function(path, options) {
    try {
      return await origPromisesReadlink.call(fs.promises, path, options);
    } catch (err) {
      if (err && err.code === 'EISDIR') {
        err.code = 'EINVAL';
      }
      throw err;
    }
  };
}
