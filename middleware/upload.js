import multer from 'multer';
import path from 'path';

// Конфигурация хранилища
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads'); // Папка для хранения загруженных файлов
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Уникальное имя файла
    },
});

// Фильтр для проверки типа файла
const fileFilter = (req, file, cb) => {
    const fileTypes = /zip|rar|pdf|png|jpg|jpeg|doc/; // Разрешенные форматы
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: File type not supported!'); // Ошибка при неподдерживаемом формате
    }
};

const upload = multer({
    storage,
    limits: { fileSize: 100 * 1024 * 1024 }, // Лимит по размеру файла 100 МБ
    fileFilter,
});

export default upload;
