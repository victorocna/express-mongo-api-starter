#!/usr/bin/env node
const { spawn } = require('child_process');

const getScriptProps = () => {
  // Get the command line arguments
  const mode = process.argv[2];

  switch (mode) {
    case 'build':
      return 'babel . --out-dir ./build';
    case 'dev':
      return 'nodemon --exec babel-node --presets=@babel/preset-env -- ./server.js';
    case 'seed':
      return 'babel-node ./db/seed.js';
    case 'start':
      return 'node ./build/server.js';
    case 'test':
      return 'mocha ./tests --require @babel/register';
  }
};

const runScript = (script) => {
  // Split script by space
  const args = script.split(' ');

  // Check if the script is a node script or npx script
  const command = args[0] === 'node' ? 'node' : 'npx';
  if (command === 'node') {
    // Remove the "node" command from the arguments
    args.shift();
  }

  // Run the script with the arguments, excluding the first element
  spawn(command, args, { stdio: 'inherit', shell: true });
};

// Run the script
const script = getScriptProps();
runScript(script);