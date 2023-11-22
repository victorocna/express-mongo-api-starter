const error = require('express-goodies/functions/error');

const complexForm = (req, res) => {
  const { checkIn } = req.body;

  if (!checkIn) {
    throw error(400, 'Check-in date is required!');
  }

  return res.status(200).json({ message: 'Data submitted successfully' });
};

module.exports = complexForm;
