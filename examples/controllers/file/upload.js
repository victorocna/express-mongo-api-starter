const aws = require('../../../plugins/aws/src');
const { error, removeDiacritics } = require('../../../functions');

module.exports = async (req, res) => {
  const document = req.files.document;
  if (!document) {
    throw error(400, 'Error! Missing document');
  }

  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB in bytes
  if (req.headers['content-length'] > MAX_FILE_SIZE) {
    throw error(413, 'Error! File is too large');
  }

  const buffer = Buffer.from(document.data, 'binary');

  //make sure to install aws-sdk/client-s3 before using this plugin
  //npm i @aws-sdk/client-s3
  try {
    await aws.upload(removeDiacritics(document.name), buffer, { public: true });
  } catch (err) {
    //eslint-disable-next-line
    console.log(err);
  }

  return res.status(200).json({
    message: 'Document uploaded successfully.',
  });
};
