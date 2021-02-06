#!/usr/bin/env node
import greeting from '../src/cli.js';
import evenGame from '../src/even-logic.js';

const name = greeting();
evenGame(name);
