import { execSync } from 'child_process';

const runCommand = (command) => {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error('Error occurred while running the command:', error);
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
};

export default runCommand;
