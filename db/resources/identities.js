const { hashSync } = require('bcryptjs');

module.exports = async () => {
  const shhhh = hashSync('supersecretpassword');
  return [
    {
      email: 'michael@email.com',
      name: 'Michael Scott',
      role: 'admin',
      password: shhhh,
      active: true,
      confirmed: true,
    },
    {
      email: 'jim@email.com',
      name: 'Jim Halpert',
      role: 'client',
      password: shhhh,
      active: false,
      confirmed: true,
    },
    {
      email: 'pam@email.com',
      name: 'Pam Beesly',
      role: 'client',
      password: shhhh,
      active: true,
      confirmed: false,
    },
  ];
};
