#!/usr/bin/env node
import greeting from '../src/cli.js';
import playGame from '../src/index.js';

const name = greeting();
playGame(name, 0);
