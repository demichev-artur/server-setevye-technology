import File from '../../models/File.js'; // Импортируйте модель, если нужно

export const uploadFileController = (req, res) => {
    if (!req.file) {
        return res.status(400).send({ message: 'No file uploaded' });
    }

    // Создание записи о файле (если нужно)
    const newFile = new File({
        filename: req.file.filename,
        path: req.file.path,
    });

    newFile.save()
        .then(() => {
            res.status(200).send({ message: 'File uploaded successfully!', filename: req.file.filename });
        })
        .catch((error) => {
            res.status(500).send({ message: 'Error saving file to database' });
        });
};
