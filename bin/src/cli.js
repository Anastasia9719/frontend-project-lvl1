import readlineSync from 'readline-sync';

let name;

export const askName = () => { name = readlineSync.question('May I have your name?'); };

export const greeting = () => console.log(`Hello, ${name}!`);
export const noIsWrongAnswer = () => console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
export const yesIsWrongAnswer = () => console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
export const congrats = () => console.log(`Congratulations, ${name}!`);
