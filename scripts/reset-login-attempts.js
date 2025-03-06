import { Identity } from '@models';
import { runScript } from 'express-goodies/functions';

/**
 * Usage:
 * node scripts/reset-login-attempts.js <email>
 */
runScript(script);

async function script() {
  // Verify command-line arguments
  const email = process.argv[2];
  if (!email) {
    throw new Error('No email address provided');
  }

  // Find the DRMA user by email in the "identity" collection
  const identity = await Identity.findOne({ email }).lean();
  if (!identity) {
    throw new Error('No identity found');
  }
  await Identity.update({ email }, { loginAttempts: 0 });

  console.log(`Login attempts reset for ${email}`);
}
