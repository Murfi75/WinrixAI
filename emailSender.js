const nodemailer = require('nodemailer');

// Настройка SMTP транспорта для Outlook
const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com', // SMTP сервер Outlook
    port: 587, // Порт для Outlook
      secure: false, // Используем TLS (не SSL)
        auth: {
            user: 'vladiusha13@outlook.com', // Твоя почта
                pass: 'vlad130913547',  // Пароль или App Password
                  },
                  });

                  // Функция отправки email
                  function sendConfirmationEmail(email, username, confirmationCode) {
                    const emailContent = `
                        <div style="font-family: Arial, sans-serif; color: #333; background-color: #000; padding: 20px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
                              <h1 style="text-align: center; color: #FF7F00;">WinrixAI</h1>
                                    <p style="color: #FFF;">Привет, <b>${username}</b>!</p>
                                          <p style="color: #FFF;">Спасибо за регистрацию в WinrixAI.</p>
                                                <p style="color: #FFF;">Ваш код подтверждения:</p>
                                                      <div style="text-align: center; padding: 10px; background-color: #FF7F00; color: #000; font-size: 24px; border-radius: 5px; margin: 10px 0;">
                                                              ${confirmationCode}
                                                                    </div>
                                                                          <p style="color: #FFF;">Если вы не регистрировались в WinrixAI, просто игнорируйте это письмо.</p>
                                                                              </div>
                                                                                `;

                                                                                  const mailOptions = {
                                                                                      from: 'WinrixAI <vladiusha13@outlook.com>',
                                                                                          to: email,
                                                                                              subject: 'Код подтверждения регистрации',
                                                                                                  html: emailContent,
                                                                                                    };

                                                                                                      return transporter.sendMail(mailOptions);
                                                                                                      }

                                                                                                      module.exports = { sendConfirmationEmail };
