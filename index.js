
const readline = require('readline');


const rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout

})
rl.question('Как вас зовут?', (userName) => {
    console.log(`Привет, ${userName}!`);
});
rl.question('Вы хотите выйти')


