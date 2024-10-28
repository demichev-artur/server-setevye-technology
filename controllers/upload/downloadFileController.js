import path from 'path';
import fs from 'fs';

// Контроллер для скачивания файла
export const downloadFileController = (req, res) => {
    const { filename } = req.params; // Получаем имя файла из параметров запроса
    const filePath = path.join('uploads', filename); // Путь к файлу (относительный)

    // Проверяем, существует ли файл
    fs.stat(filePath, (err) => {
        if (err) {
            console.error(err);
            return res.status(404).send({ message: 'Файл не найден' }); // Если файл не найден
        }

        // Устанавливаем заголовки для скачивания файла
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        res.setHeader('Content-Type', 'application/octet-stream');

        // Отправляем файл
        const readStream = fs.createReadStream(filePath);
        readStream.pipe(res);
    });
};
