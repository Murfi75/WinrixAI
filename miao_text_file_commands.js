const readline = require('readline');
const miao_text_file = require('./miao_text_file'); // Импорт функций из другого файла
const miao_text_file_commands = () => {
// Создаем интерфейс для чтения ввода
const rl = readline.createInterface({
    input: process.stdin,
        output: process.stdout
        });

        // Вопрос пользователю
        function askQuestion() {
            rl.question('Введите команду (create/delete): ', (input) => {
                    const command = input.toLowerCase();

                            if (command === 'create') {
                                        miao_text_file.create(); // Вызов функции create
                                                } else if (command === 'delete') {
                                                            miao_text_file.delete(); // Вызов функции delete
                                                                    } else {
                                                                                console.log('Неизвестная команда. Попробуйте снова.');
                                                                                        }

                                                                                                // Снова задаем вопрос
                                                                                                        askQuestion();
                                                                                                            });
                                                                                                            }

                                                                                                            // Начало работы
                                                                                                            askQuestion();
                                                                                                        };
                                                                                                        module.exports = {
                                                                                                                start: miao_text_file_commands
                                                                                                        };