#!/usr/bin/env node
import commander from 'commander';
import pageloader from '..';

const program = new commander.Command();
program.description('Download specified page from internet')
  .option('-V, --version', 'output the version number')
  .option('--output [type]', 'download directory', '')
  .arguments('<http-address>')
  .parse(process.argv);

if (program.args.length !== 1) program.help();
pageloader(program.args[0], program.output);
