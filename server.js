const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { sendConfirmationEmail } = require('./emailSender'); // Импорт функции из emailSender.js

const app = express();
const port = 65371;

let userConfirmationCode = {}; // Для хранения кода подтверждения

// Настройка CORS
app.use(cors());
app.use(bodyParser.json());

// Маршрут для проверки работы API
app.get('/api/data', (req, res) => {
  res.json({ message: 'Привет, это API на GitHub Codespaces!' });
  });

  // Маршрут для отправки email с кодом подтверждения
  app.post('/api/send-email', async (req, res) => {
    const { email, username, confirmationCode } = req.body;

      try {
          // Сохраняем код подтверждения для проверки
              userConfirmationCode[email] = confirmationCode;

                  // Отправляем email
                      await sendConfirmationEmail(email, username, confirmationCode);
                          res.status(200).json({ message: 'Email с кодом подтверждения успешно отправлен!' });
                            } catch (error) {
                                console.error('Ошибка при отправке email:', error);
                                    res.status(500).json({ message: 'Ошибка при отправке email' });
                                      }
                                      });

                                      // Маршрут для проверки кода подтверждения
                                      app.post('/api/verify-code', (req, res) => {
                                        const { email, enteredCode } = req.body;

                                          // Проверяем код
                                            if (userConfirmationCode[email] && userConfirmationCode[email] === enteredCode) {
                                                res.status(200).json({ message: 'Код подтверждения верен!' });
                                                  } else {
                                                      res.status(400).json({ message: 'Неверный код подтверждения!' });
                                                        }
                                                        });

                                                        // Запуск сервера
                                                        app.listen(port, () => {
                                                          console.log(`API работает на http://localhost:${port}`);
                                                          });
                                                          