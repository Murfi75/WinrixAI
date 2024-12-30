const readline = require('readline');
const server = require('./server');
const process = require('process');
const check_site_status = require('./check_site_status');
const { setTimeout } = require('timers/promises');
const main_menu = () => {
// Создание интерфейса
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMainMenu() {
  console.log('\nГлавное меню:');
  console.log('1. Запуск проекта');
  console.log('2. Статус проекта');
  console.log('3. Остановить проект');
  console.log('4. Выход');
  
  rl.question('Выберите опцию (1-4): ', (choice) => {
    switch(choice) {
      case '1':
        startProject();
        break;
      case '2':
        showStatus();
        break;
      case '3':
        stopProject();
        break;
      case '4':
        exit();
        break;
      default:
        console.log('Неверный выбор. Попробуйте снова.');
        showMainMenu();
        break;
    }
  });
}

function startProject() {
  console.log('Проект запускается...');
  server.create();
  showMainMenu();
}

function showStatus() {
  console.log('Проверка статуса проекта...');
	setTimeout(() => {
    console.log('Проверка статуса сайта...');
    setTimeout(() => {
			let site_status = check_site_status.check();
      setTimeout(() => {
        console.log('Проверка статуса датабазы MongoDB...');
        setTimeout(() => {
          
        }, 2000);
      }, 2000)
    }, 2000);
  }, 2000

  )
  
  showMainMenu();
}

function stopProject() {
  console.log('Проект останавливается...');
  server.delete();
  showMainMenu();
}

function exit() {
  console.log('Выход из программы...');
  rl.close();
  process.exit();
}

// Показать главное меню
showMainMenu();
};
module.exports = {
    main_menu: main_menu,
}