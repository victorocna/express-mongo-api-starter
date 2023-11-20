const { error } = require('../../../functions');

module.exports = async (req, res) => {
  console.log(req.file, req.files);
  return res.status(200).json({ message: 'ok' });
};
