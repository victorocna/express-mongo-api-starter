#!/usr/bin/env node
const { spawn } = require('child_process');

const getScriptProps = () => {
  // Get the command line arguments
  const mode = process.argv[2];
  const extraArgs = process.argv.slice(3).join(' ');

  switch (mode) {
    case 'build':
      return `babel . --out-dir ./build --extensions .js,.jsx,.ts,.tsx ${extraArgs}`;
    case 'dev':
      return `nodemon --ext js,jsx,ts,tsx,json --exec babel-node --extensions .js,.jsx,.ts,.tsx ./server.js ${extraArgs}`;
    case 'seed':
      return `babel-node --extensions .js,.jsx,.ts,.tsx ./db/seed.js ${extraArgs}`;
    case 'start':
      return `node ./build/server.js ${extraArgs}`;
    case 'test':
      return `mocha ./tests --require @babel/register ${extraArgs}`;
  }
};

const runScript = (script) => {
  // Local binaries (babel, nodemon, mocha) run via npx; node scripts run directly.
  // Pass the full command string with shell:true and no args array to avoid the
  // DEP0190 deprecation warning (args array + shell:true).
  const command = script.startsWith('node ') ? script : `npx ${script}`;
  spawn(command, { stdio: 'inherit', shell: true });
};

// Run the script
const script = getScriptProps();
runScript(script);
