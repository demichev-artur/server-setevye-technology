import File from "../../models/File.js";

export const getFilesController = async (req, res) => {
    try {
        const files = await File.find(); // Получаем все файлы из БД
        res.status(200).json(files);
    } catch (error) {
        res.status(500).json({ message: "Ошибка сервера", error: error.message });
    }
};