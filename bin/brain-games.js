#!/usr/bin/env node

import { greeting, askName } from '../src/cli.js';

console.log('Welcome to the Brain Games!');

askName();

greeting();
