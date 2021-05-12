import readlineSync from 'readline-sync';

const askForAnswer = () => readlineSync.question('Your answer: ');

export default askForAnswer;
