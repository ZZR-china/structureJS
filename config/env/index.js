import path from 'path';

const env = process.env.NODE_ENV || 'production';
const config = require(`./${env}`); // eslint-disable-line import/no-dynamic-require

const defaults = {
  root: path.join(__dirname, '/..'),
  rootPath: path.join(__dirname, '/../..')
};

export default Object.assign(defaults, config);