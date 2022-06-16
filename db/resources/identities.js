const { hashSync } = require('bcryptjs');

module.exports = async () => {
  return [
    {
      email: 'michael@email.com',
      name: 'Michael Scott',
      role: 'admin',
      password: hashSync('supersecretpassword'),
      active: true,
      confirmed: true,
    },
    {
      email: 'jim@email.com',
      name: 'Jim Halpert',
      role: 'client',
      password: hashSync('supersecretpassword'),
      active: false,
      confirmed: true,
    },
    {
      email: 'pam@email.com',
      name: 'Pam Beesly',
      role: 'client',
      password: hashSync('supersecretpassword'),
      active: true,
      confirmed: false,
    },
  ];
};
