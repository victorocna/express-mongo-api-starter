import runCommand from './run-command.js';

runCommand(
  'rm -rf dist && \
  babel . -d dist --ignore db,dist,node_modules,scripts,tests && \
  node dist/server'
);
