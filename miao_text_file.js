const fs = require('fs');
const fs1 = () => {
    console.log('Началось создание папки text_files');
    fs.mkdir('text_files', mkdirerror1 => {
		if (mkdirerror1) {
            console.error(`Ошибка при создании папки text_files: ` + mkdirerror1)
        }
        else {
            console.log('Папка text_files успешно создана');
            console.log('Началось создание файла text_files/miao.txt');
            fs.writeFile('text_files/miao.txt', 'MIAO MIAO MIAO!!!', writefileerror1 => {
                if (writefileerror1) {
                    console.error(`Ошибка при создании файла text_files/miao.txt: ` + writefileerror1)
                }
                else {
                    console.log('Файл text_files/miao.txt успешно создан');
					console.log('ВСЕ ОПЕРАЦИИ УСПЕШНО ЗАВЕРШЕНЫ!!!')
                }
            })
        }
    })
};
const fs2 = () => {
    console.log('Началось удаление файла text_files/miao.txt');
    fs.unlink('text_files/miao.txt', unlinkerror1 => {
        if (unlinkerror1) {
            console.error(`Ошибка при удалении файла text_files/miao.txt: ` + unlinkerror1)

        }
        else {
            console.log('Файл text_files/miao.txt успешно удален');
            console.log('Началось удаление папки text_files');
            fs.rmdir('text_files', rmdirerror1=> {
                if (rmdirerror1) {
                    console.error(`Ошибка при удалении папки text_files: ` + rmdirerror1)
                }
                else {
                    console.log('Папка text_files успешно удалена');
                    console.log('ВСЕ ОПЕРАЦИИ УСПЕШНО ЗАВЕРШЕНЫ!!!')
                }
            })
        }
    })
}



module.exports = {
	create: fs1,
    delete: fs2

}